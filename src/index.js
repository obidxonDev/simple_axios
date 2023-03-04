import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleRoute from './Single-route/SingleRoute';
// import User from './components/User';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='*' element={<h1>sahifa yoq</h1>}/>
        <Route path='/user/:id' element={<SingleRoute/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
