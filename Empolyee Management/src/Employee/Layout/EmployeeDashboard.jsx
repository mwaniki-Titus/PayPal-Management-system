import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeInfo from './Employee/EmployeeInfo';

const EmployeeDashboard = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/employeeinfo" element={<EmployeeInfo />} />
            </Routes>
        </div>
    );
}

export default EmployeeDashboard ;
