import './App.scss';

import MainContent from './Layout/MainContent';
import Login from './Features/User/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import EmployeeDashboard from './Employee/Layout/Employee/EmployeeDashboard';


function App() {
  return (
    <div className='mainContainer'>
          <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/*" element={<MainContent />} />
          <Route path="/employeeDashboard/*" element={<EmployeeDashboard />} />

      </Routes>
    </div>
    
  );
}

export default App;
