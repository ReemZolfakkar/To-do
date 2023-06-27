import { createReducer } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getByCriteria } from "./action";
const initialState = {
  weather: [],
};

export const weatherReducer = createReducer(initialState, (builder) => {
  builder.addCase(getByCriteria.pending, (state) => {
    // state.errorpayload = true;
  });
});

export default weatherReducer;
