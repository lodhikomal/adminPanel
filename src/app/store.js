import { configureStore } from "@reduxjs/toolkit";
import dataReducers from "../features/dataSlice";
export default configureStore({
  reducer: {
    data: dataReducers,
  },
});
