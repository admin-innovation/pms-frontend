import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice';
import notificationReducer from './NotificationSlice'
import goalSliceReducer from './GoalSlice'
import taskSliceReducer from './TaskSlice';

export default configureStore({
  reducer: {
    user:userReducer,
    notifications: notificationReducer,
    goals: goalSliceReducer,
    tasks: taskSliceReducer
  },
})
