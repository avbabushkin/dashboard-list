import { AppThunk } from "../../store/store"
import { dashboardListApi } from "./dashboard-list-api"
import { setDashboardList } from "./dashboard-list-slice"

const handleResult = () => {}

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
    if (res.data.resultCode === 0) {

      dispatch(getDashboardListTC())
    } else {
      alert(res.data.messages[0])
    }
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
