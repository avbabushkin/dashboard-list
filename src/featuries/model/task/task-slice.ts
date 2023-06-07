import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IInitState, ISetTasksToDashboardData } from '../../../shared/types/types';

// initializer
export const initialState: IInitState = {
  dashboardList: [],
  tasks: {}
};

export const TaskSlice = createSlice({
    name: 'TaskSlice',
    initialState,
    reducers: {
      setTaskList: (state, action: PayloadAction<ISetTasksToDashboardData>) => {
        state.tasks[action.payload.dashboardId] = action.payload.taskList
      }
    }
});

export const {
  setTaskList,
} = TaskSlice.actions;

export const DashboardSliceReducer = TaskSlice.reducer;