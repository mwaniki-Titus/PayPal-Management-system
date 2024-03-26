import React, { useState } from 'react';
import { useUpdatePayrollMutation } from '../../Features/payroll/PayrollApi';

const EditPayrollModalForm = ({ payroll, onClose }) => {
    const [updatedPayroll, setUpdatedPayroll] = useState({ ...payroll });
    const [updatePayroll, { isLoading }] = useUpdatePayrollMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPayroll((prevPayroll) => ({
            ...prevPayroll,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePayroll(updatedPayroll); // Call the updatePayroll mutation
            onClose(); // Close the modal after updating
        } catch (error) {
            console.error('Error updating payroll:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={updatedPayroll.firstName} onChange={handleChange} />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={updatedPayroll.lastName} onChange={handleChange} />

                    <label htmlFor="grossPay">Gross Pay:</label>
                    <input type="text" id="grossPay" name="grossPay" value={updatedPayroll.grossPay} onChange={handleChange} />

                    <label htmlFor="totalDeductions">Total Deductions:</label>
                    <input type="text" id="totalDeductions" name="totalDeductions" value={updatedPayroll.totalDeductions} onChange={handleChange} />

                    <label htmlFor="netPay">Net Pay:</label>
                    <input type="text" id="netPay" name="netPay" value={updatedPayroll.netPay} onChange={handleChange} />

                    <label htmlFor="payrollDate">Payroll Date:</label>
                    <input type="date" id="payrollDate" name="payrollDate" value={updatedPayroll.payrollDate} onChange={handleChange} />

                    <button type="submit" disabled={isLoading}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditPayrollModalForm;

