import {axiosInstance} from "../../shared/api/axios";
import {IDashboard} from "../../shared/types/types";
import {ICreateDashboardData, IDeleteDashboardData} from "./dashboard-list-types";

export const dashboardListApi = {
  /**
   * Get all todolists
   */
  getDashboardList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),
  
  /**
   * 
   * @param title 
   * @returns 
   */
  createDashboard: (title: string) => axiosInstance.post<ICreateDashboardData>('/todo-lists', {title}),
  

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteDashboard: (id: string) => axiosInstance.delete<IDeleteDashboardData>(`/todo-lists/${id}`),
}