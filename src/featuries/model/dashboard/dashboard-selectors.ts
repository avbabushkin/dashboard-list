import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export const getDasboardState = (state: RootState) => state.dashboard
export const getDashboardSelector = createSelector(
  [getDasboardState],
  (dashboard) => [...dashboard.dashboardList].sort((a, b) => b.order - a.order)
);

export const getTaskList = createSelector(
  getDasboardState,
  (dashboard) => dashboard.tasks
) 
