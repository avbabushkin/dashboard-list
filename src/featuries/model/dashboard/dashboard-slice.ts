import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IInitState, IDashboard, ITask } from '../../../shared/types/types';

export const initialState: IInitState = {
  dashboardList: [],
  tasks: {}
};

export interface ISetTasksToDashboardData {
  dashboardId: string
  taskList: ITask[]
}

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
      setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
        state.dashboardList = action.payload
      },
      setTasksToDashboard: (state, action: PayloadAction<ISetTasksToDashboardData>) => {
        state.tasks[action.payload.dashboardId] = action.payload.taskList
      }
    }
});

export const {
  setDashboardList,
  setTasksToDashboard
} = DashboardSlice.actions;

export const DashboardSliceReducer = DashboardSlice.reducer;