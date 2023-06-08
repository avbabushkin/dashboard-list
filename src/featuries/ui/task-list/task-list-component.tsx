import React, {FC, useCallback, useEffect} from 'react'
import { ITaskListProps } from './task-list-types';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { getTaskList } from '../../model/dashboard/dashboard-selectors';
import { getDashboardTasksTC, createTasksTC } from '../../model/dashboard/dashboard-thunk';
import { sortByOreder } from '../../../shared/lib/sort-by-order';
import { Task } from '../../index'
import { CreateButton } from '../../../shared';

export const TaskListComponent: FC<ITaskListProps> = ({id}) => {
  const dispatch = useAppDispatch()
  const allTaskList = useAppSelector(getTaskList)
  const taskList = allTaskList[id] ?? [];

  useEffect(() => {
    dispatch(getDashboardTasksTC(id))
  }, [dispatch, id])
 
  const handleCreateTask = useCallback((value: string) => {
    dispatch(createTasksTC(id, value))
  }, [dispatch, id]);

  const taskListUi = [...taskList]
    .sort(sortByOreder)
    .map((task) => <Task key={task.id} dashboardId={id} id={task.id} title={task.title} status={task.status}/>)  
  
  return (
    <div>
      <div><CreateButton placeholder={'Task title'} onEntityCreate={handleCreateTask} /></div>
      {taskListUi}
    </div>
  )
};