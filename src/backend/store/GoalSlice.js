import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    setGoals(state, action) {
      state.goals = action.payload;
    },
    updateGoal(state, action) {
      const { id, ...updates } = action.payload;
      const goalIndex = state.goals.findIndex(goal => goal._id === id);
      if (goalIndex !== -1) {
        state.goals[goalIndex] = { ...state.goals[goalIndex], ...updates };
      }
    },
    deleteGoal(state, action) {
      const id = action.payload;
      state.goals = state.goals.filter(goal => goal._id !== id);
    },
    addGoal(state,action){
      state.goals.push(action.payload)
    }
  }
});

export const { setGoals, updateGoal, deleteGoal, addGoal } = goalSlice.actions;
export default goalSlice.reducer;
