import { axiosInstance } from "../../../shared/api/axios";
import { IResponseData } from "../../../shared/types/types";
import { IDashboard } from "../../../entities/types/types";
import { IGetTasksData, ICreateTaskData, ICreateDashboardData } from './dashboard-types'
import { IDeleteDashboardData } from "../../../widgets/ui/dashboard-list/dashboard-list-types";

export const dashboardListApi = {
  /**
   * Get all dashboards
   */
  getDashboardList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),
  
  /**
   * Create dashboard
   * @param title - dashboard title
   * @returns 
   */
  createDashboard: (title: string) => axiosInstance.post<IResponseData<ICreateDashboardData>>('/todo-lists', {title}),

  /**
   * Delete dashboard
   * @param id - dashboard id
   */
  deleteDashboard: (id: string) => axiosInstance.delete<IResponseData<IDeleteDashboardData>>(`/todo-lists/${id}`),

  /**
   * Get dashboard tasks
   * @param id - dashboard id
   */
  updateDashboard: (id: string, title: string) => axiosInstance.put<IResponseData<IDeleteDashboardData>>(`/todo-lists/${id}`, {title}),

  /**
   * get all task for dashboard
   * @param dashboardId - dashboard id
   * @param page - number of task page
   * @param count - count of tasks
   * @returns 
   */
  getDashboardTasks: (dashboardId: string, page: number = 1, count: number = 10) => axiosInstance.get<IGetTasksData>(`/todo-lists/${dashboardId}/tasks`, { params: {page, count}} ),

  /**
   * cteate task
   * @param dashboardId - dashboard id
   * @param title - task title 
   */
  createTask: (dashboardId: string, title: string) => axiosInstance.post<IResponseData<ICreateTaskData>>(`/todo-lists/${dashboardId}/tasks`, {title}),

  /**
   * delete task
   * @param dashboardId - dashboard id
   * @param taskId - task id
   */
  deleteTask: (dashboardId: string, taskId: string) => axiosInstance.delete<IResponseData>(`/todo-lists/${dashboardId}/tasks/${taskId}`),

  /**
   * update task
   * @param dashboardId - dashboard id 
   * @param taskId - task id
   */
  updateTask: (dashboardId: string, taskId: string, title: string, status: number) => axiosInstance.put<IResponseData<ICreateTaskData>>(`/todo-lists/${dashboardId}/tasks/${taskId}`, {title, status})
}
