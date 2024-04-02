import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'john',
  lastName: 'sani',
  id: 'snai',
  token: '',
  refreshToken: '',
  email: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const user = action.payload
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.id = action.payload.id;
      // state.token = action.payload.token;
      // state.refreshToken = action.payload.refreshToken;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    clearUser(state) {
      state.firstName = '';
      state.lastName = '';
      state.id = '';
      state.token = '';
      state.refreshToken = '';
      state.email = '';
      state.role = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
