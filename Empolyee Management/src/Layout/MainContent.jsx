import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './MainContent.scss';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Attendance from '../Pages/Attendance/Attendance';
import Deductions from '../Pages/Deduction/Deduction';
import PayrollTable from '../Pages/Payroll/Payroll';
import ScheduleTable from '../Pages/Schedule/Schedule';
import Position from '../Pages/Position/Position';
import EmployeeList from '../Pages/EmloyeeList/EmployeeList'; 
import CashAdvance from '../Pages/CashAdvance/CashAdvance';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainContent = () => {
    return (
        <div>
            <Navbar />
        <div className="main-content">
         
            <Sidebar className="sidebar" />
            <div className="content">
                <Routes>
                    
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/deductions" element={<Deductions />} />
                    <Route path="/payroll" element={<PayrollTable />} />
                    <Route path="/schedule" element={<ScheduleTable />} />
                    <Route path="/position" element={<Position />} />
                    <Route path="/employeeList" element={<EmployeeList />} />
                    <Route path="/cashAdvance" element={<CashAdvance />} />
                </Routes>
            </div>
        </div>
        </div>
    );
}

export default MainContent;



