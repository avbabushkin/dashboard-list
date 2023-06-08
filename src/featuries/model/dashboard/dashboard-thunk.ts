import { AppThunk } from "../../../store/store"
import { dashboardListApi } from "../../api/dashboard/dashboard-api"
import { setDashboardList, setTasksToDashboard } from "./dashboard-slice"

export const getDashboardListTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.getDashboardList()
    dispatch(setDashboardList(res.data))
  } catch (error) {
    alert(error)
  }
}

export const createDashboardTC = (title: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.createDashboard(title)
    res.data.resultCode === 0 
    ? dispatch(getDashboardListTC()) 
    : alert(res.data.messages[0])
  } catch (error) {
    alert(error)
  }
}

export const deleteDashBoardTC = (id: string): AppThunk =>async (dispatch) => {
  try {
    const res = await dashboardListApi.deleteDashboard(id)
    if (res.data.resultCode === 0) {
      dispatch(getDashboardListTC())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }

}

export const updateDashBoardTC = (id: string, title: string): AppThunk =>async (dispatch) => {
  try {
    const res = await dashboardListApi.updateDashboard(id, title)
    if (res.data.resultCode === 0) {
      dispatch(getDashboardListTC())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const getDashboardTasksTC = (dashboardId: string, page?: number, count?: number): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.getDashboardTasks(dashboardId, page, count)
    dispatch(setTasksToDashboard({
      dashboardId,
      taskList: res.data.items
    }))
  } catch (error) {
    alert(error)
  }
}

export const createTasksTC = (dashboardId: string, title: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.createTask(dashboardId, title)
    if (res.data.resultCode === 0) {
      dispatch(getDashboardTasksTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const deleteTasksTC = (dashboardId: string, taskId: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.deleteTask(dashboardId, taskId)
    if (res.data.resultCode === 0) {
      dispatch(getDashboardTasksTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const updateTaskTC = (dashboardId: string, taskId: string, title: string, status: number): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardListApi.updateTask(dashboardId, taskId, title, status)
    if (res.data.resultCode === 0) {
      dispatch(getDashboardTasksTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}
