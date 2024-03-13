

import React from 'react';
import './Payroll.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const PayrollTable = () => {
    const payroll = [
        { id: 1, employeeName: 'John Doe', grossPay: 3000, deductions: 500, netPay: 2500, payrollDate: '2024-03-12' },
        { id: 2, employeeName: 'Jane Smith', grossPay: 3500, deductions: 600, netPay: 2900, payrollDate: '2024-03-12' },
        { id: 3, employeeName: 'Alice Johnson', grossPay: 3200, deductions: 550, netPay: 2650, payrollDate: '2024-03-12' },
        { id: 4, employeeName: 'Bob Brown', grossPay: 2800, deductions: 480, netPay: 2320, payrollDate: '2024-03-12' },
        { id: 5, employeeName: 'Eve Williams', grossPay: 3100, deductions: 520, netPay: 2580, payrollDate: '2024-03-12' }
    ];

    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
       
        console.log("Deleting item with ID:", id);
    };

    return (
        <div className="payroll-table">
               <div className="TopMenu">
            <div className="CurrentPage">
               <h1>Payroll</h1>
               </div>
               <div className='Navigate'>
               <button>Dashboard</button>
            </div>
            </div>

            <div className="addNew">
            <button>+ New</button>
            </div>

        
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Gross Pay</th>
                        <th>Deductions</th>
                        <th>Net Pay</th>
                        <th>Payroll Date</th>
                        <th>Tools</th> 
                    </tr>
                </thead>
                <tbody>
                    {payroll.map(item => (
                        <tr key={item.id}>
                            <td>{item.employeeName}</td>
                            <td>${item.grossPay.toFixed(2)}</td>
                            <td>${item.deductions.toFixed(2)}</td>
                            <td>${item.netPay.toFixed(2)}</td>
                            <td>{item.payrollDate}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayrollTable;


