import React, {ChangeEvent, useEffect, useState} from 'react';
import {createDashboardTC, getDashboardListTC, deleteDashBoardTC, updateDashBoardTC} from '../../model/dashboard/dashboard-thunk';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks';
import {getDashboardSelector} from '../../model/dashboard/dashboard-selectors';
import { Dashboard } from '../../index';
import styles from './styles.module.scss'

export const DashboardListComponent = () => {
  const dispatch = useAppDispatch()

  const dashBoardList = useAppSelector(getDashboardSelector)
  console.log(dashBoardList)

  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(getDashboardListTC())
  }, [])

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

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
      DashboardListComponent
      <div>
        <input type="text" value={title} onChange={handleChangeTitle}/>
        <button onClick={handleCreateDashboard}>Add</button>
      </div>
      <div>
        <div className={styles.dashboard}>
          {dashBoardListUi}
        </div>
      </div>
    </div>
  )
}
