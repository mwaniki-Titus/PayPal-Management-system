import React, { useEffect } from 'react';
import './EmployeePayroll.scss';
import { useGetPayrollByEmpIDQuery } from '../../../Features/payroll/PayrollApi';

const EmployeePayroll = () => {
    
    const employeeDetails = JSON.parse(localStorage.getItem('employeeDetails'));
    const employeeID = employeeDetails ? employeeDetails.EmployeeID : null;

    const { data, isLoading, isError, refetch } = useGetPayrollByEmpIDQuery(employeeID); 
    // console.log(data)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching payroll data: {isError.message}</div>;

    if (!data || data.length === 0) {
        return <div>No payroll data available</div>;
    }
  
    return (
        <div className="employee-payroll">
            <table>
                <thead>
                    <tr>
                        <th>Gross Pay</th>
                        <th>Deductions</th>
                        <th>Net Pay</th>
                        <th>Payroll Date</th>
                    </tr>
                </thead>
                <tbody>
   
                    <tr><td>{data[0].GrossPay}</td>
                        <td>{data[0].TotalDeductions}</td>
                        <td>{data[0].NetPay}</td>
                        <td>{data[0].PayrollDate}</td>
                        
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default EmployeePayroll;
