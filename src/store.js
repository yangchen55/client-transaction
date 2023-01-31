import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/UserSlice";
import transReducer from "./redux/transaction/TransSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    trans: transReducer
  },
});

export default store;
