import React from 'react';
import './viewPayroll';

const PayrollDetailsModal = ({ isOpen, onClose, payroll }) => {
    if (!isOpen || !payroll) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Payroll Details</h2>
                <div>
                    <label>Payroll ID:</label>
                    <span>{payroll.PayrollID}</span>
                </div>
                <div>
                    <label>Name:</label>
                    <span>{`${payroll.FirstName} ${payroll.LastName}`}</span>
                </div>
                <div>
                    <label>Gross Pay:</label>
                    <span>{payroll.GrossPay}</span>
                </div>
                <div>
                    <label>Total Deductions:</label>
                    <span>{payroll.TotalDeductions}</span>
                </div>
                <div>
                    <label>Net Pay:</label>
                    <span>{payroll.NetPay}</span>
                </div>
                <div>
                    <label>Payroll Date:</label>
                    <span>{payroll.PayrollDate}</span>
                </div>
                {/* Add more details here as needed */}
                <button onClick={handlePrint}>Print</button>
            </div>
        </div>
    );
};

export default PayrollDetailsModal;
