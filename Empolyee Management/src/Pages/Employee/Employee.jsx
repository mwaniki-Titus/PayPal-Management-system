import './Employee.scss';
import EmployeePayroll from '../../Components/Employee/EmployeePayroll';
import AttendanceTable from '../../Components/Employee/AttendanceTable';
import TimeTable from '../../Components/Employee/TimeTable';


const Employee = () => {
    return (
        <div className='EmployeeDashboard'>
          <div className="topDashboard">
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