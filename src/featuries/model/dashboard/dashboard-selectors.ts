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

export const getTaskListExtended = (state: RootState, id: string) => {
  const taskList = state.dashboard.tasks[id]

  if (!taskList) {
    return []
  }

  return [...taskList]
}
