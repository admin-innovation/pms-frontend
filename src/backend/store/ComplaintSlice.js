import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  complaints: [],
};

const complaintSlice = createSlice({
  name: 'Complaints',
  initialState,
  reducers: {
    setComplaints(state, action) {
      state.complaints = action.payload;
    },
    addComplaints(state, action) {
      state.complaints.push(action.payload);
    },
    removeComplaints(state, action) {
      state.complaints = state.complaints.filter(
        (complaints) => complaints._id !== action.payload
      );
    },
    setRead(state, action) {
      const complaintsId = action.payload;
      const complaintsIndex = state.complaints.findIndex(
        (Complaints) =>cComplaints._id === complaintsId
      );
      if (complaintsIndex !== -1) {
        state.complaints[complaintsIndex].read = true;
      }
    },
  },
});

export const { setComplaints, addComplaints, removeComplaints, setRead } = complaintSlice.actions;

export default complaintSlice.reducer;
