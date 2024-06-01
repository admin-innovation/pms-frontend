import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications(state, action) {
      state.notifications = action.payload;
    },
    addNotification(state, action) {
      state.notifications.push(action.payload);
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter(
        (notification) => notification._id !== action.payload
      );
    },
    setRead(state, action) {
      const notificationId = action.payload;
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification._id === notificationId
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
      }
    },
  },
});

export const { setNotifications, addNotification, removeNotification, setRead } = notificationSlice.actions;

export default notificationSlice.reducer;
