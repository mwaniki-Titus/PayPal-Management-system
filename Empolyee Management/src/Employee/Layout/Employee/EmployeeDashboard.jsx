import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeInfo from './EmployeeInfo';
import Navbar from '../../../Layout/Navbar';
import Footer from '../../../Layout/PageFooter';

const EmployeeDashboard = () => {
    return (
        <div>
                <Navbar/>
        <div className="main-content">
        
            <Routes>
                <Route path="/" element={<EmployeeInfo />} />
            </Routes>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    );
}

export default EmployeeDashboard ;
