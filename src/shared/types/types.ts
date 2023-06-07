export interface IDashboard {
  id: string;
  title: string;
  addedDate: string;
  order: number;
}

export interface ISetTasksToDashboardData {
  dashboardId: string
  taskList: ITask[]
}

export interface IInitState {
  dashboardList: IDashboard[]
  tasks: Record<string, ITask[]>
}

export interface IGetTasksData {
  items: ITask[]
  totalCount: number,
  error: string | null
}

export interface ITaskListProps {
  dashboardId: string
}

export interface ITask {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
} 

export interface ICreateTask {
  resultCode: number
  messages: string[]
  data: ITask
}

export interface IDeleteTask {
  
}

export interface ITaskProps {
  id: string
  title: string
  completed: boolean
}