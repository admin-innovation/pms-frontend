import { createSlice   } from "@reduxjs/toolkit";


const initialState = {
    tasks :[]
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        setTasks(state,action){
            state.tasks = action.payload
        },
        // updateTask(state,action){
        //     const task_id = action.payload.id;
        //     const goalIndex = state.goals.findIndex(
        //         (goal) =>goal._id = goal_id
        //     )
        //     if(goalIndex!==-1){
        //         state.goals[goalIndex].date = action.payload.date
        //     }
        // }

    }
})

export const { setTasks} = taskSlice.actions
export default taskSlice.reducer
