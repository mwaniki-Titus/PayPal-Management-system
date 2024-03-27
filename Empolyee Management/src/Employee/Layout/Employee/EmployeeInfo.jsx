import React from 'react';
import './EmployeeInfo.scss';
import EmployeePayroll from '../../Components/Employee/EmployeePayroll';
import AttendanceTable from '../../Components/Employee/AttendanceTable';
import TimeTable from '../../Components/Employee/TimeTable';
import { useGetEmployeebyIDQuery } from '../../../Features/User/UserApi';

const Employee = ({ employeeId }) => {
    
    const employeeDetails = JSON.parse(localStorage.getItem('employeeDetails'));
    const employeeID = employeeDetails ? employeeDetails.EmployeeID : null;

    const { data: employee, isLoading, error } = useGetEmployeebyIDQuery(employeeID);
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='EmployeeDashboard'>
            <div className='TopDashboard'>
                <div className='allReports'>
                    <div className='totalNumber'>
                        <h1>My Page</h1>
                    </div>
                    <div className='total percentage'>
                        <h1>Percentage</h1>
                    </div>
                    <div className='ontime'>On Time</div>
                    <div className='late'>Late Today</div>
                </div>
            </div>

            <div className="bottommDashboard">
                <div className='employeeProfile'>
                    <div>
                        <img src={employee.PhotoURL} alt="Employee Avatar" />
                    </div>
                    <div>Photo</div>
                    <div>Name: {employee[0].FirstName} {employee[0].LastName}</div>
                    <div>Email: {employee[0].Email}</div>
                    <div>Contact: {employee[0].Contact}</div>
                    <div>Location: {employee[0].Location}</div>
                    <div>Position: {employee[0].Gender}</div>
                    <div>Bio: {employee[0].Bio}</div>
                </div>
                <div className='timecheck'>
                    <h3>TimeIN/TimeOut</h3>
                    <TimeTable />
                    <div className='Attendtable'>
                        <h3>Attendance</h3>
                        <AttendanceTable />
                    </div>
                </div>
            </div>
            <div className='employeebottom'>
                <div className='Attend'>
                    <div className='payroll'>
                        <h3>Payroll</h3>
                        <EmployeePayroll employeeID={employee.EmployeeID} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;
