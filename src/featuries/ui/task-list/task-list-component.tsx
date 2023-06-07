import React, {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks';

import {ITaskListProps} from '../../../shared/types/types';
import {getTaskList} from '../../model/dashboard/dashboard-selectors'
import {Task} from "../../index";
import {getDashboardTasksTC} from '../../model/dashboard/dashboard-thunk'

import styles from './styles.module.scss'

export const TaskListComponent: FC<ITaskListProps> = (
  dashboardId
) => {
  const dispatch = useAppDispatch()
  const allTaskList = useAppSelector(getTaskList)
  const taskList = allTaskList[dashboardId] ?? [];

  useEffect(() => {
    dispatch(getDashboardTasksTC(dashboardId))
  }, [])

  const taskListUi = taskList.map((task) => {
    return (
      <Task key={task.id} id={task.id} title={task.title} completed={task.completed} />
    )
  })

  const handleCreateTask = () => {
    dispatch(crateTaskTC(dashboardId))
  };

  return (
    <div className={styles.task}>
      <p>Task list</p>
      {taskListUi}
      <button onClick={handleCreateTask}>Create task</button>
    </div>
  )
};
