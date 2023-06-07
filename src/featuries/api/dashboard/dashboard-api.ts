import {axiosInstance} from "../../../shared/api/axios";
import {IDashboard, IGetTasksData} from "../../../shared/types/types";
import {ICreateDashboardData, IDeleteDashboardData} from "../../ui/dashboard-list/dashboard-list-types";

export const dashboardListApi = {
  /**
   * Get all todolists
   */
  getDashboardList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),
  
  /**
   * Create dashboard
   * @param title - dashboard title
   * @returns 
   */
  createDashboard: (title: string) => axiosInstance.post<ICreateDashboardData>('/todo-lists', {title}),
  

  /**
   * Delete dashboard
   * @param id - dashboard id
   */
  deleteDashboard: (id: string) => axiosInstance.delete<IDeleteDashboardData>(`/todo-lists/${id}`),

  /**
     * Get dashboard tasks
     * @param id - dashboard id
     */
    updateDashboard: (id: string, title: string) => axiosInstance.put<IDeleteDashboardData>(`/todo-lists/${id}`, {title}),

    /**
     * 
     * @param dashboardId 
     * @param page - number of task page
     * @param count - count of tasks
     * @returns 
     */
    getDashboardTasks: (dashboardId: string, page: number = 1, count: number = 10) => axiosInstance.get<IGetTasksData>(`/todo-lists/${dashboardId}/tasks`, { params: {page, count}} ),
}
