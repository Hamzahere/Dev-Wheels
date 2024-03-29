import { combineReducers } from "redux";

// reducers
import carReducer from "./carReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cars: carReducer,
  user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;
