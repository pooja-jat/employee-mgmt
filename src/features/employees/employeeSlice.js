import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    edit: {
      employee: {},
      isEdit: false,
    },
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        employees: state.employees.filter(
          (item) => item._id !== action.payload
        ),
      };
    },

    edit: (state, action) => {
      return {
        ...state,
        edit: { employee: action.payload, isEdit: true },
      };
    },
    update: (state, action) => {
      return {
        ...state,
        employees: state.employees.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        edit: { employee: {}, isEdit: false },
      };
    },
  },
});

export const { add, remove, edit, update } = employeeSlice.actions;
export default employeeSlice.reducer;
