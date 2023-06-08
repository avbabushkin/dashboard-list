import React from 'react'
import { DashboardList } from '../../featuries/index'
import styles from './styles.module.scss'

export const MainPageComponent = () => {
  return (
    <div className={styles.container}>
      {/* <h2>Main Page</h2> */}
      <DashboardList/>
    </div>
  )
}
