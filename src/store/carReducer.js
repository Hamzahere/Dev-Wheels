import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { app, db ,storage } from '../firebase/firebase';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore/lite';
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref } from 'firebase/storage';


const initialState = {
  carList: [],
  filteredCars: [],
  isLoading: false,
  error: null,
  selectedCar: {},
  searchedForCars: false,
  bookings:null
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const carsCollection = collection(db, 'Cars');
  const carsSnapshot = await getDocs(carsCollection);
  const carsList = [];

  for (const doc of carsSnapshot.docs) {
    const carData = doc.data();
    const car = {
      id: doc.id,
      name: carData.name,
      model: carData.model,
      configuration: carData.configuration,
      price: carData.price,
      availibility_one:carData.availibility_one,
      locations:carData.locations,
      description:carData.description,
      imageURL: '', // Initialize imageURL as an empty string
    };

    if (carData.imageURL) {
      const imageRef = ref(storage, carData.imageURL);
      try {
        const downloadURL = await getDownloadURL(imageRef);
        car.imageURL = downloadURL;
      } catch (error) {
        console.log('Error getting image URL:', error);
      }
    }

    carsList.push(car);
  }

  return carsList;
});


export const createBooking = createAsyncThunk('cars/createBooking', async (data) => {
  try {


    const bookingCollection = collection(db, 'booking');
    const newDocRef = await addDoc(bookingCollection, {
      data

    });

    const bookingId = newDocRef.id;
    console.log(bookingId);
    return bookingId;
  } catch (error) {
    throw new Error('Failed to create booking.');
  }
});


export const fetchBooking = createAsyncThunk('booking/fetchBooking', async (email) => {
  try {
    const bookingQuery = query(collection(db, 'booking'), where('data.data.user.email', '==', email));
    const bookingSnapshot = await getDocs(bookingQuery);

    const bookingData = bookingSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data().data
    }));

    console.log("bookingData", bookingData);
    return bookingData;
  } catch (error) {
    throw new Error('Failed to fetch booking.');
  }
});




const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },

    filterCars: (state, action) => {
      const { name, location, model, price, from, to } = action.payload;
      const filteredCars = state.carList.filter((car) => {
        const carNameMatch = !name || car.name.toLowerCase().includes(name.toLowerCase());
        const locationMatch = location.length === 0 || car.locations.includes(location);
        const modelMatch = !model || car.model.toLowerCase().includes(model.toLowerCase());
        const priceMatch = !price || car.price === price;
        const fromTimestampMatch = from.timestampValue
          ? car.availibility_one.from.seconds * 1000 >= Date.parse(from.timestampValue)
          : true;
        const toTimestampMatch = to.timestampValue
          ? car.availibility_one.to.seconds * 1000 <= Date.parse(to.timestampValue)
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
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carList = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.bookings = action.payload;
      });
  },
});

export const { addCar, filterCars, selectCar } = carSlice.actions;
export default carSlice.reducer;