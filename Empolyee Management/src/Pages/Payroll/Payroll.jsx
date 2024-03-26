import React, { useState } from 'react';
import './Payroll.scss'; 
import { useGetAllPayrollsQuery } from '../../Features/payroll/PayrollApi';
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';
import EditPayrollModalForm from './editPayroll';
import AddPayrollForm from './addPayroll';
import PayrollDetailsModal from './viewPayroll';

const PayrollTable = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showPayrollDetailsModal, setShowPayrollDetailsModal] = useState(false); 
    const [selectedPayroll, setSelectedPayroll] = useState(null); 

    const { data: payroll, error, isLoading } = useGetAllPayrollsQuery();

    const handleEdit = (payroll) => {
        setShowEditModal(true);
        setSelectedPayroll(payroll);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
    };

    const handleViewDetails = (payroll) => {
        setSelectedPayroll(payroll);
        setShowPayrollDetailsModal(true);
    };

    const handlePayrollDetailsModalClose = () => {
        setSelectedPayroll(null);
        setShowPayrollDetailsModal(false);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="payroll-table">
            <div className="addNew">
                <button onClick={() => setShowAddForm(true)}>+ New</button>
            </div>

            {showAddForm && <AddPayrollForm onCancel={() => setShowAddForm(false)} />}

            {showPayrollDetailsModal && (
                <PayrollDetailsModal
                    isOpen={showPayrollDetailsModal}
                    onClose={handlePayrollDetailsModalClose}
                    payroll={selectedPayroll}
                />
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
                    {payroll.map(payroll => (
                        <tr key={payroll.PayrollID}>
                            <td>{`${payroll.FirstName} ${payroll.LastName}`}</td>
                            <td>${payroll.GrossPay}</td>
                            <td>${payroll.TotalDeductions}</td>
                            <td>${payroll.NetPay}</td>
                            <td>{payroll.PayrollDate}</td>
                            <td>
                                <button onClick={() => handleViewDetails(payroll)}>View</button>
                                <button onClick={() => handleEdit(payroll)}>Edit</button>
                                <button onClick={() => handleDelete(payroll.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                
            {showEditModal && (
                <EditPayrollModalForm
                    payroll={selectedPayroll}
                    onClose={() => setShowEditModal(false)}
                />
            )}
        </div>
    );
};

export default PayrollTable;

