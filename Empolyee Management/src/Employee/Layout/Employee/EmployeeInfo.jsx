import React from 'react';
import './EmployeeInfo.scss';
import EmployeePayroll from '../../Components/Employee/EmployeePayroll';
import AttendanceTable from '../../Components/Employee/AttendanceTable';
import TimeTable from '../../Components/Employee/TimeTable';
import { useGetEmployeebyIDQuery } from '../../../Features/User/UserApi'
// import Avatar from '../../../assets/Avatar (4).png'

const Employee = ({ employeeId }) => {
   
    const { data: employeeData, isLoading, error } = useGetEmployeebyIDQuery(employeeId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='EmployeeDashboard'>
            <div className='TopDashboard'>
                <div className='allReports'>
                    <div className='totalNumber'>
                        <h1>Total Employees</h1>
                    </div>
                    <div className='total percentage'>
                        <h1>Percentage</h1>
                    </div>
                    <div className='ontime'>On time</div>
                    <div className='late'>late today</div>
                </div>
            </div>

            <div className="bottommDashboard">
                <div className='employeeProfile'>
                    <div>
                        {/* <Avatar/> */}
                    </div>
                    <div>Name: {employeeData.name}</div>
                    <div>Email: {employeeData.email}</div>
                    <div>Position: {employeeData.position}</div>
                </div>
                <div className='timecheck'>
                    <h3>TimeIN/TimeOut</h3>
                    <TimeTable />
                    <div className='payroll'>
                        <h3>Payroll</h3>
                        <EmployeePayroll />
                    </div>
                </div>

            </div>
            <div className='employeebottom'>
                <div className='Attend'>
                    <div className='Attendtable'>
                        <h3>Attendance</h3>
                        <AttendanceTable />
                    </div>
                </div>
                {/* <div className='payroll'>
                <h3>Payroll</h3>
                <EmployeePayroll/>
            </div> */}
            </div>
        </div>
    )
}

export default Employee;
