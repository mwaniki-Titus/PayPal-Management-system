import React from 'react';
import './EmployeePayroll.scss'; 

const EmployeePayroll = () => {
    const payroll = [
        { grossPay: 3000, deductions: 500, netPay: 2500, payrollDate: '2024-03-12' },
     
    ];

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
                    {payroll.map((item, index) => (
                        <tr key={index}>
                            <td>${item.grossPay}</td>
                            <td>${item.deductions}</td>
                            <td>${item.netPay}</td>
                            <td>{item.payrollDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeePayroll;
