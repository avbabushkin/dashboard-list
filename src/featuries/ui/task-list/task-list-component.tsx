import React, {FC, useEffect} from 'react'
import { ITaskListProps } from './task-list-types';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { getTaskList } from '../../model/dashboard/dashboard-selectors';
import {getDashboardTasksTC, createTasksTC} from '../../model/dashboard/dashboard-thunk';
import { sortByOreder } from '../../../shared/lib/sort-by-order';
import {Task} from '../../index'
import { CreateButton } from '../../../shared';

export const TaskListComponent: FC<ITaskListProps> = ({id}) => {
  
  const dispatch = useAppDispatch()
  const allTaskList = useAppSelector(getTaskList)

  useEffect(() => {
    dispatch(getDashboardTasksTC(id))
  }, [dispatch, id])
 
  const handleCreateTask = (value: string) => {
    dispatch(createTasksTC(id, value))
  };
  
  // const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.currentTarget.value)
  // }

  // const OnUpdateValue = (value: string) => {
  //   dispatch(updateTaskTC(id, value))
  // }

  const taskList = allTaskList[id] ?? [];
  const taskListUi = [...taskList]
    .sort(sortByOreder)
    .map((task) => <Task key={task.id} dashboardId={id} id={task.id} title={task.title} status={task.status}/>)  
  
  return (
    <div>
      <div><CreateButton onEntityCreate={handleCreateTask} /></div>
      {taskListUi}
    </div>
  )
};