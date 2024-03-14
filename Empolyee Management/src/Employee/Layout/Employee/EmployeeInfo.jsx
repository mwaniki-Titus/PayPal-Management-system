import React from 'react';
import './EmployeeInfo.scss';
import EmployeePayroll from '../../Components/Employee/EmployeePayroll'
import AttendanceTable from '../../Components/Employee/AttendanceTable';
import TimeTable from '../../Components/Employee/TimeTable';
import Avatar from '../../../assets/Avatar (4).png'

const Employee = () => {

    const employeeData = {
        name: "John Doe",
        email: "john.doe@example.com",
        position: "Software Engineer"
    };

    return (
        <div className='EmployeeDashboard'>
         
            <div className='employeeProfile'>
                <div>
                    <Avatar/>
                </div>
                <div>Name: {employeeData.name}</div>
                <div>Email: {employeeData.email}</div>
                <div>Position: {employeeData.position}</div>
            </div>
         
            <div className="bottommDashboard">
                <div className='timecheck'>
                    <TimeTable/>
                </div>
                <div className='Attendtable'>
                    <AttendanceTable/>
                </div>
            </div>
            <div className='payroll'>
                <EmployeePayroll/>
            </div>
        </div>
    )
}

export default Employee;
