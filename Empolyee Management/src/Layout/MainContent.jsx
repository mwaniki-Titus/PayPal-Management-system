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
import Employee from '../Pages/Employee/Employee'; 

const MainContent = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/deductions" element={<Deductions />} />
                <Route path="/payroll" element={<PayrollTable />} />
                <Route path="/schedule" element={<ScheduleTable />} />
                <Route path="/position" element={<Position />} />
                {/* <Route path="/employeeList" element={<EmployeeList />} />
                <Route path="/cashAdvance" element={<CashAdvance />} />
                <Route path="/employee" element={<Employee />} /> */}
            </Routes>
        </div>
    );
}

export default MainContent;


