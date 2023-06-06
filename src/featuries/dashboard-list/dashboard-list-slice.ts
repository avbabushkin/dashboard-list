import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IInitState } from '../../shared/types/types';
import { IDashboard } from '../../shared/types/types';

export const initialState: IInitState = {
  dashboardList: []
};

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
      setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
        state.dashboardList = action.payload
      }
    }
});

export const {
  setDashboardList
} = DashboardSlice.actions;

export const DashboardSliceReducer = DashboardSlice.reducer;