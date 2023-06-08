import React, {FC, useState, memo} from 'react'
import { ITaskProps } from './task-types';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { deleteTasksTC, updateTaskTC } from '../../model/dashboard/dashboard-thunk';
import { EditableSpan } from '../../../shared';
import { Title, IconButton, Space, Checkbox } from '@shturval/takelage-ui';
// import { Checkbox } from 'antd';
// import { CheckboxChangeEvent } from 'antd/es/checkbox';
// import styles from './styles.module.scss';

export const TaskComponent: FC<ITaskProps> = memo(({
  dashboardId,
  id,
  title, 
  status
}) => {
  console.log('TaskComponent')
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => {
   dispatch(deleteTasksTC(dashboardId, id)) 
  };

  const [statusNum, setStatusNum] = useState(status)

  const OnUpdateValue = (value: string) => {
    dispatch(updateTaskTC(dashboardId, id, value, status))
  }

  // const handleUpdateStatus = (e: CheckboxChangeEvent) => {
  //   const num = e.target.checked ? 1 : 0
  //   dispatch(updateTaskTC(dashboardId, id, title, num))
  //   setStatusNum(num)
  // }
  const handleUpdateStatus = (value: boolean) => {
    const num = value ? 1 : 0
    dispatch(updateTaskTC(dashboardId, id, title, num))
    setStatusNum(num)
  }

  return (
    // <div className={styles.task}>
    <Title>
      <Space>
        <Checkbox id={id} type="checkbox" onChange={handleUpdateStatus} checked={statusNum === 1}/>
        <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan>
        <IconButton title={'Delete button'} onClick={handleDeleteTask} iconName={'delete'} />
      </Space>
    </Title>

  )
});