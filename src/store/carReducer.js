import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { app, db, storage } from "../firebase/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const initialState = {
  carList: [],
  filteredCars: [],
  isLoading: true,
  error: null,
  selectedCar: {},
  searchedForCars: false,
  bookings: null,
  currentPage: 1, // Initialize the current page to 1
  itemsPerPage: 6, // Initialize the number of items per page to 6
};

export const createBooking = createAsyncThunk(
  "cars/createBooking",
  async (data) => {
    try {
      const bookingCollection = collection(db, "booking");
      const newDocRef = await addDoc(bookingCollection, {
        data,
      });

      const bookingId = newDocRef.id;
      console.log(bookingId);
      return bookingId;
    } catch (error) {
      throw new Error("Failed to create booking.");
    }
  }
);

export const fetchBooking = createAsyncThunk(
  "booking/fetchBooking",
  async (email) => {
    try {
      const bookingQuery = query(
        collection(db, "booking"),
        where("data.data.user.email", "==", email)
      );
      const bookingSnapshot = await getDocs(bookingQuery);

      const bookingData = bookingSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().data,
      }));

      console.log("bookingData", bookingData);
      return bookingData;
    } catch (error) {
      throw new Error("Failed to fetch booking.");
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    fetchCarsStart(state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    fetchCarsSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        carList: action.payload,
      };
    },
    fetchCarsFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    filterCars: (state, action) => {
      const { name, location, model, price, from, to } = action.payload;
      const filteredCars = state.carList.filter((car) => {
        const carNameMatch =
          !name || car.name.toLowerCase().includes(name.toLowerCase());
        const locationMatch =
          location.length === 0 || car.locations.includes(location);
        const modelMatch =
          !model || car.model.toLowerCase().includes(model.toLowerCase());
        const priceMatch = !price || car.price === price;
        const fromTimestampMatch = from.timestampValue
          ? car.availibility_one.from.seconds * 1000 >=
            Date.parse(from.timestampValue)
          : true;
        const toTimestampMatch = to.timestampValue
          ? car.availibility_one.to.seconds * 1000 <=
            Date.parse(to.timestampValue)
          : true;

        return (
          carNameMatch &&
          locationMatch &&
          modelMatch &&
          priceMatch &&
          fromTimestampMatch &&
          toTimestampMatch
        );
      });

      // state.isLoading = true;
      state.filteredCars = filteredCars.length > 0 ? filteredCars : [];
      state.searchedForCars = true;
    },

    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  addCar,
  filterCars,
  selectCar,
  setCurrentPage,
  setItemsPerPage,
  fetchCarsStart,
  fetchCarsSuccess,
  fetchCarsFailure,
} = carSlice.actions;
export default carSlice.reducer;
