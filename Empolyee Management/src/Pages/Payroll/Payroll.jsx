import React, { useState } from 'react';
import './Payroll.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const PayrollTable = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedPayrollId, setEditedPayrollId] = useState(null);
    const [newPayroll, setNewPayroll] = useState({
        id: '',
        employeeName: '',
        grossPay: '',
        deductions: '',
        netPay: '',
        payrollDate: ''
    });
    const [payroll, setPayroll] = useState([
        { id: 1, employeeName: 'John Doe', grossPay: 3000, deductions: 500, netPay: 2500, payrollDate: '2024-03-12' },
        { id: 2, employeeName: 'Jane Smith', grossPay: 3500, deductions: 600, netPay: 2900, payrollDate: '2024-03-12' },
        { id: 3, employeeName: 'Alice Johnson', grossPay: 3200, deductions: 550, netPay: 2650, payrollDate: '2024-03-12' },
        { id: 4, employeeName: 'Bob Brown', grossPay: 2800, deductions: 480, netPay: 2320, payrollDate: '2024-03-12' },
        { id: 5, employeeName: 'Eve Williams', grossPay: 3100, deductions: 520, netPay: 2580, payrollDate: '2024-03-12' }
    ]);

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedPayrollId(id);
        const payrollToEdit = payroll.find(item => item.id === id);
        setNewPayroll(payrollToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedPayroll = payroll.filter(item => item.id !== id);
        setPayroll(updatedPayroll);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPayroll({ ...newPayroll, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const updatedPayroll = payroll.map(item => {
                if (item.id === editedPayrollId) {
                    return { ...newPayroll };
                }
                return item;
            });
            setPayroll(updatedPayroll);
        } else {
            setPayroll([...payroll, { ...newPayroll, id: payroll.length + 1 }]);
        }
        setNewPayroll({
            id: '',
            employeeName: '',
            grossPay: '',
            deductions: '',
            netPay: '',
            payrollDate: ''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedPayrollId(null);
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
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="employeeName" placeholder="Employee Name" value={newPayroll.employeeName} onChange={handleInputChange} />
                    <input type="number" name="grossPay" placeholder="Gross Pay" value={newPayroll.grossPay} onChange={handleInputChange} />
                    <input type="number" name="deductions" placeholder="Deductions" value={newPayroll.deductions} onChange={handleInputChange} />
                    <input type="number" name="netPay" placeholder="Net Pay" value={newPayroll.netPay} onChange={handleInputChange} />
                    <input type="date" name="payrollDate" placeholder="Payroll Date" value={newPayroll.payrollDate} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

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
                            <td>${item.grossPay}</td>
                            <td>${item.deductions}</td>
                            <td>${item.netPay}</td>
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



