import './App.scss';

import MainContent from './Layout/MainContent';
import Login from './Features/User/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Employee from './Employee/Layout/EmployeeDashboard';


function App() {
  return (
    <div className='mainContainer'>
          <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/*" element={<MainContent />} />
          <Route path="/employee/*" element={<Employee />} />

      </Routes>
    </div>
    
  );
}

export default App;
