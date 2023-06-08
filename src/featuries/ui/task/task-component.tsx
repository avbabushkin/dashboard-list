import React, {FC, useState, memo} from 'react'
import { ITaskProps } from './task-types';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { deleteTasksTC, updateTaskTC } from '../../model/dashboard/dashboard-thunk';
import { EditableSpan } from '../../../shared';
import { Title, IconButton, Space, Checkbox } from '@shturval/takelage-ui';

export const TaskComponent: FC<ITaskProps> = memo(({
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

  const handleUpdateStatus = (value: boolean) => {
    const num = value ? 1 : 0
    dispatch(updateTaskTC(dashboardId, id, title, num))
    setStatusNum(num)
  }

  return (
    <Title>
      <Space>
        <Checkbox name={id} type="checkbox" onChange={handleUpdateStatus} value={statusNum === 1}/>
        <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan>
        <IconButton title={'Delete button'} onClick={handleDeleteTask} iconName={'delete'} />
      </Space>
    </Title>

  )
});