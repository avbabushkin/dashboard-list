export interface IDashboard {
  id: string;
  title: string;
  addedDate: string;
  order: number;
}

export interface IInitState {
  dashboardList: IDashboard[]
}