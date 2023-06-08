import React, {FC, memo} from 'react';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { formatRelative, subDays } from 'date-fns'
import { enGB } from 'date-fns/locale';

import { EditableSpan } from '../../../shared';
import { IDashboardProps } from  './dashboard-types';
import { deleteDashBoardTC, updateDashBoardTC } from '../../model/dashboard/dashboard-thunk'
import { TaskList } from '../../index';
import { IconButton, Title, Space } from '@shturval/takelage-ui';

export const DashboardComponent: FC<IDashboardProps> = memo(({
  id, 
  title, 
  addedDate
}) => {
  console.log("DashboardComponent")
  const dispatch = useAppDispatch()
  const date = formatRelative(subDays(new Date(addedDate), 0), new Date(), {
    locale: enGB
  })
  
  const handleDeleteDashboard = () => {
    dispatch(deleteDashBoardTC(id))
  };

  const OnUpdateValue = (value: string) => {
    dispatch(updateDashBoardTC(id, value))
  }

  return (
    <div>
      <Title>
        <Space>
          <IconButton title="delete dashboard" onClick={handleDeleteDashboard} iconName={'delete'}/>
          <EditableSpan onUpdateValue={OnUpdateValue}>{title}</EditableSpan> 
        </Space>
      </Title>
      <div>
        <TaskList id={id}/>
      </div>
      <div>Dashboard created: {date}</div>
    </div>
  )
});