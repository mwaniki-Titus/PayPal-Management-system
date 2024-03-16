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
import Overtime from '../Pages/OverTime/Overtime'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './PageFooter';

const MainContent = () => {
    return (
        <div>
            <Navbar />
        <div className="main-content">
         
            <Sidebar className="sidebar" />
            <div className="content">
                <Routes>
                    
                    <Route path="/*" element={<Dashboard />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/deductions" element={<Deductions />} />
                    <Route path="/payroll" element={<PayrollTable />} />
                    <Route path="/schedule" element={<ScheduleTable />} />
                    <Route path="/position" element={<Position />} />
                     <Route path="/employee" element={<EmployeeList />} />
                        <Route path="/employee/cash-advance" element={<CashAdvance />} />
                        <Route path="/employee/overtime" element={<Overtime />} />
                        <Route path="/employee/employee-list" element={<EmployeeList />} />
                </Routes>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    );
}

export default MainContent;



