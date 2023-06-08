import {ITask, IDashboard} from '../../../entities/types/types'

export interface IInitState {
  dashboardList: IDashboard[]
  tasks: Record<string, ITask[]>
}

export interface ISetTasksToDashboardData {
  dashboardId: string
  taskList: ITask[]
}
