import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { MainPage, LoginPage, NotFoundPage } from '../pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/*'} element={<Navigate to={'/404'}/>} />
        <Route path={'/404'} element={<NotFoundPage/>} />
        <Route path={'/login'} element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
