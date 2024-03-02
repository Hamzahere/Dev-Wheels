import { takeLatest, put, call } from "redux-saga/effects";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import { createBookingSuccess, createBookingFailure } from "./carReducer";

// Existing fetchBookingSaga remains unchanged (refer to previous response)

function* createBookingSaga(action) {
  console.log("create booking saga called");
  try {
    const bookingCollection = collection(db, "booking");
    const newDocRef = yield call(addDoc, bookingCollection, action.payload);
    const bookingId = newDocRef.id;
    console.log(bookingId);
    yield put(createBookingSuccess(bookingId)); // Dispatch success action
  } catch (error) {
    yield put(createBookingFailure(error.message)); // Dispatch failure action
  }
}

export function* watchCreateBooking() {
  yield takeLatest("car/createBookingSuccess", createBookingSaga);
}
