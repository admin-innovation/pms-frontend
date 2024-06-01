import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    first_name: '',
    last_name: '',
    middle_name:'',
    id: '',
    designation:'',
    email: '',
    role: '',
    profile_pic: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    deleteUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { setUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
