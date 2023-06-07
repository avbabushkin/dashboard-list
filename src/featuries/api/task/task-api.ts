import {axiosInstance} from "../../../shared/api/axios";
import { IGetTasksData } from "../../../shared/types/types";

export const taskListApi = {
  /**
   * 
   * @param dashboardId 
   * @param page - number of task page
   * @param count - count of tasks
   */
  getTaskList: (dashboardId: string, page: number = 1, count: number = 10) => axiosInstance.get<IGetTasksData>(`/todo-lists/${dashboardId}/tasks`, { params: {page, count}} ),

  /**
   * 
   * @param dashboardId - dashboard id
   */
  createTask: (dashboardId: string, title: string) => axiosInstance.post<any>(`/todo-lists/${dashboardId}/tasks`, {title}),
  
  /**
   * 
   * @param dashboardId - dashboard id
   * @param taskId - task id 
   */
  deleteTask: (dashboardId: string, taskId: string) => axiosInstance.delete<any>(`/todo-lists/${dashboardId}/tasks/${taskId}`),
}