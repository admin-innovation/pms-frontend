import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    updateEmployee(state, action) {
      const { id, ...updates } = action.payload;
      const employeeIndex = state.employees.findIndex(
        (employee) => employee._id === id
      );

      if (employeeIndex !== -1) {
        state.employees[employeeIndex] = {
          ...state.employees[employeeIndex],
          ...updates,
        };
      }
    },
    deleteEmployee(state, action) {
      const id = action.payload;
      state.employees = state.employees.filter(
        (employee) => employee._id !== id
      );
    },
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
  },
});

export const { setEmployees, updateEmployee, deleteEmployee, addEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
