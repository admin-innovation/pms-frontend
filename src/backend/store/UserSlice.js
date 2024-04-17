import { createSlice } from '@reduxjs/toolkit';
import { Profiler } from 'react';

const initialState = {
  first_name: '',
  last_name: '',
  last_name:'',
  id: '',
  designation:'',
  email: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const user = action.payload
      state.user = action.payload
      state.first_name = user.first_name;
      state.middle_name= user.middle_name;
      state.profile_pic = user.profile_pic
      state.last_name = user.last_name;
      state.id = user._id;
      state.designation = user.designation
      state.email = user.email;
      state.role = user.role;
    },
    clearUser(state) {
      state.first_name = '';
      state.last_name = '';
      state.id = '';
      state.email = '';
      state.role = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
