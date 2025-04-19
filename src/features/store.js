import { configureStore } from "@reduxjs/toolkit";
import employee from "./employees/employeeSlice";

const store = configureStore({
  reducer: { employee },
});

export default store;
