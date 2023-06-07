import { AppThunk } from "../../../store/store"
import { taskListApi } from "../../api/task/task-api"
import { setTaskList } from "./task-slice"


export const getTaskListTC = (dashboardId: string): AppThunk => async (dispatch) => {
  const res = await taskListApi.getTaskList(dashboardId)
  dispatch(setTaskList({
    dashboardId,
    taskList: res.data.items
  }))
}

export const createTaskTC = (dashboardId: string, task_title: string): AppThunk => async (dispatch) => {
  try {
    const res = await taskListApi.createTask(dashboardId, task_title)
    if (res.data.resultCode === 0) {

      dispatch(getTaskListTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const deleteDashBoardTC = (dashboardId: string, taskId: string): AppThunk =>async (dispatch) => {
  try {
    const res = await taskListApi.deleteTask(dashboardId, taskId)
    if (res.data.resultCode === 0) {

      dispatch(getTaskListTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}
