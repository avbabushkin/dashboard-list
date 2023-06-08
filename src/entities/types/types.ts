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

export interface IDashboard {
  id: string;
  title: string;
  addedDate: string;
  order: number;
}
