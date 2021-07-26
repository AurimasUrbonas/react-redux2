import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ducks/authSlice";
import counterReducer from "./ducks/counterSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});

export default store;
