import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Login';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';import RegisterPage from './Register';
import { Switch } from 'antd';
import HomePage from './Home';
import ShowPage from './Show';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={< HomePage />}></Route>
        <Route path="/register" element={< RegisterPage />}></Route>
        <Route path="/login" element={< LoginPage />}></Route>
        <Route path="/show" element={< ShowPage />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
