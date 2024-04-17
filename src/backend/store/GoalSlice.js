import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    goals: [],
  };



const goalSlice = createSlice({
    name:"goals",
    initialState,
    reducers:{
        setGoals(state,action){
            state.goals = action.payload
        },
        updateGoals(state,action){
            const goal_id = action.payload.id;
            const goalIndex = state.goals.findIndex(
                (goal) =>goal._id = goal_id
            )
            if(goalIndex!==-1){
                state.goals[goalIndex].date = action.payload.date
            }
        }

    }
})


export const { setGoals, updateGoals} = goalSlice.actions
export default goalSlice.reducer
