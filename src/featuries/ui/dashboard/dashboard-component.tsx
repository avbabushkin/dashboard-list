import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks';
import {format} from 'date-fns'

import {EditableSpan} from '../../../shared';
import {TaskList} from '../../index';
import {IDashboardProps} from  './dashboard-types';
import {getTaskList} from '../../model/dashboard/dashboard-selectors';
import {deleteDashBoardTC, updateDashBoardTC, getDashboardTasksTC} from '../../model/dashboard/dashboard-thunk'
import styles from './styles.module.scss'

export const DashboardComponent: FC<IDashboardProps> = ({
  id, 
  title, 
  addedDate
}) => {
  const dispatch = useAppDispatch()
  const allTaskList = useAppSelector(getTaskList)
  const taskList = allTaskList[id] ?? [];
  const date = format(new Date(addedDate), 'yy.MM.dd')

  useEffect(() => {
    dispatch(getDashboardTasksTC(id))
  }, [])
  
  const handleDeleteDashboard = () => {
    dispatch(deleteDashBoardTC(id))
  };

  // const handleGetDashboardTasks = () => {
  //   dispatch(getDashboardTasksTC(id, 1, 10))
  // };
  
  const OnUpdateValue = (value: string) => {
    dispatch(updateDashBoardTC(id, value))
  }

  return (
    <div className={styles.dashboard}>
      <h4>
        <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan> 
      </h4>
      <div>
        <TaskList dashboardId={id}/>
        {/* <button onClick={handleGetDashboardTasks}>get tasks</button> */}
        {/* <button onClick={}></button> */}
      </div>
      <div>Dashboard created: {date}</div>
      <button onClick={handleDeleteDashboard}>Delete dashboard</button>
    </div>
  )
};
