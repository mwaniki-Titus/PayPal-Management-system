import React from 'react';
import './EmployeeInfo.scss';
import EmployeePayroll from '../../Components/Employee/EmployeePayroll';
import AttendanceTable from '../../Components/Employee/AttendanceTable';
import TimeTable from '../../Components/Employee/TimeTable';
import { useGetEmployeebyIDQuery} from '../../../Features/User/UserApi';

const Employee = ({ employeeId }) => {
    const { data: employee, isLoading, error } = useGetEmployeebyIDQuery(employeeId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='EmployeeDashboard'>
            <div className='TopDashboard'>
                <div className='allReports'>
                    <div className='totalNumber'>
                        <h1>my page</h1>
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
                        <img src={employee.PhotoURL} alt="Employee Avatar" />
                    </div>
                    <div>Name: {employee.FirstName} {employee.LastName}</div>
                    <div>Email: {employee.Email}</div>
                    <div>Contact: {employee.Contact}</div>
                    <div>Location: {employee.Location}</div>
                    <div>Gender: {employee.Gender}</div>
                    <div>Position: {employee.Position}</div>
                    <div>Birth Date: {employee.BirthDate}</div>
                    <div>Bank Name: {employee.BankName}</div>
                    <div>Bank Branch: {employee.BankBranch}</div>
                    <div>Account Number: {employee.AccountNumber}</div>
                    <div>Bio: {employee.Bio}</div>
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
            </div>
        </div>
    )
}

export default Employee;
