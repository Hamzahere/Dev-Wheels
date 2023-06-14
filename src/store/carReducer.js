import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import {app,db} from '../firebase/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const initialState = {
  carList: [],
  filteredCars: [],
    isLoading: false,
  error: null,
  };

  export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const carsCollection = collection(db, 'Cars');
    const carsSnapshot = await getDocs(carsCollection);
    const carsList = carsSnapshot.docs.map((doc) => doc.data());
    return carsList;
  });

  const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
      addCar: (state, action) => {
        state.cars.push(action.payload);
      },
      filterCars: (state, action) => {
        const searchInput = action.payload;
        state.filteredCars = state.carList.filter((car) =>
          car.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      },
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

  export const { addCar,filterCars  } = carSlice.actions;
  export default carSlice.reducer;