import React, { useCallback, useEffect } from 'react';
import { Space, Panel } from '@shturval/takelage-ui';
import { Col, Row } from 'antd'

import { createDashboardTC, getDashboardListTC }  from '../../../featuries/model/dashboard/dashboard-thunk';
import { useAppDispatch, useAppSelector }         from '../../../shared/hooks/hooks';
import { getDashboardSelector }                   from '../../../featuries/model/dashboard/dashboard-selectors';
import { Dashboard } from '../../../featuries/index';
import { CreateButton } from '../../../shared';
import styles from './dashboard-list.module.scss'

export const DashboardListComponent = () => {
  console.log('DashboardListComponent')
  const dispatch = useAppDispatch()

  const dashBoardList = useAppSelector(getDashboardSelector)

  useEffect(() => {
    dispatch(getDashboardListTC())
  }, [])

  const handleCreateDashboard = useCallback((title: string) => {
    dispatch(createDashboardTC(title))
  }, []);
  
  return (
    <Panel>
      <Space direction={'vertical'}>
        <Panel className={styles.topPanel}>
          <CreateButton placeholder={'Dashboard title'} onEntityCreate={handleCreateDashboard}/>
        </Panel>
        <Row gutter={[16,16]}>
          { 
            dashBoardList.map((dashboard) =>
              <Col span={6} key={dashboard.id}>
                <Dashboard 
                  key={dashboard.id} 
                  id={dashboard.id} 
                  title={dashboard.title} 
                  addedDate={dashboard.addedDate}/>
              </Col>
            )
          }
        </Row>
      </Space>
    </Panel>
  )
}
