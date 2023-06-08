import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISetTasksToDashboardData, IInitState} from './dashboard-types'
import { IDashboard } from 'src/entities/types/types';

export const initialState: IInitState = {
  dashboardList: [],
  tasks: {}
};

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
      setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
        state.dashboardList = action.payload
      },
      setTasksToDashboard: (state, action: PayloadAction<ISetTasksToDashboardData>) => {
        state.tasks[action.payload.dashboardId] = action.payload.taskList
      },
      removeTasksDashboard: (state, action: PayloadAction<string>) => {
        delete state.tasks[action.payload]
      }
    }
});

export const {
  setDashboardList,
  setTasksToDashboard,
  removeTasksDashboard
} = DashboardSlice.actions;

export const DashboardSliceReducer = DashboardSlice.reducer;