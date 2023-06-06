import React, {ChangeEvent, useEffect, useState} from 'react';
import {createDashboardTC, getDashboardListTC, deleteDashBoardTC} from './dashboard-list-thunk';
import {useAppDispatch, useAppSelector} from '../../shared/hooks/hooks';
import {getDashboardSelector} from './dashboard-list-selectors';

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

  const handleDeleteDashboard = (id: string) => {
    dispatch(deleteDashBoardTC(id))
  };

  const dashBoardListUi = dashBoardList.map((dashboard) => {
    return (
      <React.Fragment key={dashboard.id}>
        <h4>
          {dashboard.title}
        </h4>
        <div>
          {dashboard.addedDate}
        </div>
        <button onClick={() => handleDeleteDashboard(dashboard.id)}>Delete</button>
      </React.Fragment>
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
        {dashBoardListUi}
      </div>
    </div>
  )
}
