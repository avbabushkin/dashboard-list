import React, {ChangeEvent, FC, useState} from 'react'
import { ITaskProps } from './task-types';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { deleteTasksTC, updateTaskTC } from '../../model/dashboard/dashboard-thunk';
import { EditableSpan } from '../../../shared';
import { BsFillTrashFill } from "react-icons/bs";
// import { Checkbox } from '@shturval/takelage-ui';
import styles from './styles.module.scss';

export const TaskComponent: FC<ITaskProps> = ({
  dashboardId,
  id,
  title, 
  status
}) => {
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => {
   dispatch(deleteTasksTC(dashboardId, id)) 
  };

  const [statusNum, setStatusNum] = useState(status)

  const OnUpdateValue = (value: string) => {
    dispatch(updateTaskTC(dashboardId, id, value, status))
  }

  const handleUpdateStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusNum(e.target.checked ? 0 : 1)
    dispatch(updateTaskTC(dashboardId, id, title, statusNum))
  }

  return (
    <div className={styles.task}>
      <div className={styles.check}>
        <input type="checkbox" onChange={handleUpdateStatus} checked={statusNum === 1} />
      </div>
      <div className={styles.title}>
        <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan>
      </div>
      <button title='delete task' onClick={handleDeleteTask}><BsFillTrashFill/></button>
    </div>
  )
};