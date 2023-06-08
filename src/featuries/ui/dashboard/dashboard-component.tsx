import React, {FC} from 'react';
import {useAppDispatch} from '../../../shared/hooks/hooks';
import {format} from 'date-fns'

import {EditableSpan} from '../../../shared';
import {IDashboardProps} from  './dashboard-types';
import {deleteDashBoardTC, updateDashBoardTC} from '../../model/dashboard/dashboard-thunk'
import {TaskList} from '../../index';
import { BsFillTrashFill } from "react-icons/bs";
import styles from './styles.module.scss'

export const DashboardComponent: FC<IDashboardProps> = ({
  id, 
  title, 
  addedDate
}) => {
  const dispatch = useAppDispatch()
  const date = format(new Date(addedDate), 'yy.MM.dd')
  
  const handleDeleteDashboard = () => {
    dispatch(deleteDashBoardTC(id))
  };

  const OnUpdateValue = (value: string) => {
    dispatch(updateDashBoardTC(id, value))
  }

  return (
    <div className={styles.dashboard}>
      <h4>
        <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan> 
      </h4>
      <div>
        <h4>Tasks</h4>
        <TaskList id={id}/>
      </div>
      <div className={styles.del}>
        <div>Dashboard created: {date}</div>
        <button title="delete dashboard" onClick={handleDeleteDashboard}>
          <BsFillTrashFill/>
        </button>
      </div>
    </div>
  )
};
