import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import {app,db} from '../firebase/firebase';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { doc, setDoc } from "firebase/firestore"; 


const initialState = {
  carList: [],
  filteredCars: [],
  isLoading: false,
  error: null,
  selectedCar:{},
  searchedForCars:false
  };

  export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const carsCollection = collection(db, 'Cars');
    
    const carsSnapshot = await getDocs(carsCollection);
    const carsList = carsSnapshot.docs.map((doc) => doc.data());
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
  

  const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
      addCar: (state, action) => {
        state.cars.push(action.payload);
      },
      // filterCars: (state, action) => {
      //   const searchInput = action.payload;
      //   state.filteredCars = state.carList.filter((car) =>
      //     car.name.toLowerCase().includes(searchInput.toLowerCase())
      //   );
      // },
      // filterCars: (state, action) => {
      //   const { name, from, to } = action.payload;
      
      //   state.filteredCars = state.carList.filter((car) => {
      //     //const carNameMatch = car.name.toLowerCase().includes(name.toLowerCase());
      //     const fromTimestampMatch = from.timestampValue
      //       ? car.availibility_one.from.seconds * 1000 >= Date.parse(from.timestampValue)
      //       : true;
      //     const toTimestampMatch = to.timestampValue
      //       ? car.availibility_one.to.seconds * 1000 <= Date.parse(to.timestampValue)
      //       : true;
      
      //     return fromTimestampMatch && toTimestampMatch;
      //   });
      // },

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
    },extraReducers: (builder) => {
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
        });
    },
  });

  export const { addCar,filterCars,selectCar  } = carSlice.actions;
  export default carSlice.reducer;