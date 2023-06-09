import { axiosInstance } from "../../../shared/api/axios";
import { ICreateSessionData, IDeleteSession, ICurrentSessionData } from './auth-types'
import { IResponseData } from "src/shared/types/types";

export const authApi = {
  /**
   * check current user 
   */
  currentUser: () => axiosInstance.get<IResponseData<ICurrentSessionData>>('/auth/me'),

  /**
   * Authorize on the service
   * @param email - email for login
   * @param password - passwort for login
   */
  createSession: (email: string, password: string) => axiosInstance.post<IResponseData<ICreateSessionData>>('/auth/login', {email, password}),

  /**
   * logout from service
   */
  deleteSession: () => axiosInstance.delete<IDeleteSession>('/auth/login')
} 