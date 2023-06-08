import {IDashboard, ITask} from '../../../entities/types/types';

export interface ICreateDashboardData {
  item: IDashboard
}

export interface ICreateTaskData {
  item: ITask
}

export interface IGetTasksData {
  items: ITask[]
  totalCount: number,
  error: string | null
}
