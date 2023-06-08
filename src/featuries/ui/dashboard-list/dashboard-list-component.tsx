import React, { useEffect, useState }             from 'react';
import { createDashboardTC, getDashboardListTC }  from '../../model/dashboard/dashboard-thunk';
import { useAppDispatch, useAppSelector }         from '../../../shared/hooks/hooks';
import { getDashboardSelector }                   from '../../model/dashboard/dashboard-selectors';
import { Dashboard } from '../../index';
import styles from './styles.module.scss'
import { CreateButton } from '../../../shared';

export const DashboardListComponent = () => {
  const dispatch = useAppDispatch()

  const dashBoardList = useAppSelector(getDashboardSelector)

  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(getDashboardListTC())
  }, [])

  // const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.currentTarget.value)
  // }

  const handleCreateDashboard = () => {
    dispatch(createDashboardTC(title))
    setTitle('')
  }
  
  const dashBoardListUi = dashBoardList.map((dashboard) => {
    return (
      <Dashboard key={dashboard.id} id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate}/>
    )
  });

  return (
    <div>
      <CreateButton onEntityCreate={handleCreateDashboard}/>
      <div className={styles.dashboard}>{dashBoardListUi}</div>
    </div>
  )
}
