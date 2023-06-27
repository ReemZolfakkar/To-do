import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getByCriteria = createAsyncThunk("get/ByCriteria", async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=d8274d4da05453a2182e3fea097fce57`
  );

  if (response.status == 200 || response.status == 201) {
    return response.data.data;
  } else {
    //console("hi");
  }
});
