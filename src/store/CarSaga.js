import { takeLatest, put, call } from "redux-saga/effects";
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
import {
  fetchCarsStart,
  fetchCarsSuccess,
  fetchCarsFailure,
} from "./carReducer";

function* fetchCarsSaga() {
  console.log("Saga triggered: fetchCarsSaga");
  try {
    const carsCollection = collection(db, "Cars");
    const carsSnapshot = yield call(getDocs, carsCollection);
    const carsList = [];

    for (const doc of carsSnapshot.docs) {
      const carData = doc.data();
      const car = {
        id: doc.id,
        name: carData.name,
        model: carData.model,
        configuration: carData.configuration,
        price: carData.price,
        availibility_one: carData.availibility_one,
        locations: carData.locations,
        description: carData.description,
        imageURL: "", // Initialize imageURL as an empty string
      };

      if (carData.imageURL) {
        const imageRef = ref(storage, carData.imageURL);
        try {
          const downloadURL = yield call(getDownloadURL, imageRef);
          car.imageURL = downloadURL;
        } catch (error) {
          console.log("Error getting image URL:", error);
        }
      }

      carsList.push(car);
    }

    yield put(fetchCarsSuccess(carsList));
  } catch (error) {
    yield put(fetchCarsFailure(error.message));
  }
}

// **Optional (Add condition to watchFetchCars if needed):**
export function* watchFetchCars() {
  yield takeLatest(
    (action) => action.type === "car/fetchCarsStart", // Add condition && shouldFetchCars()
    fetchCarsSaga
  );
}

// **Optional function (Define your logic for when to fetch cars):**
// function shouldFetchCars() {
//   // Implement your logic here (e.g., check if carList is empty or needs refresh)
//   // Replace with your specific criteria
//   return true; // Replace with your actual condition
// }
