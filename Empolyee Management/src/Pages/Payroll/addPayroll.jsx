import React, { useState } from 'react';
import './addPayroll.scss';
import { useAddPayrollMutation } from '../../Features/payroll/PayrollApi';

const AddPayrollForm = () => {
  const [newPayroll, setNewPayroll] = useState({
    PayrollDate: '',
    EmployeeID: '',
    GrossPay: '',
    TotalDeductions: '',
    NetPay: ''
  });

  // Define the mutation hook
  const [addPayroll, { isLoading, isError }] = useAddPayrollMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPayroll({ ...newPayroll, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the mutation function with the new payroll data
      await addPayroll(newPayroll);
      // Reset the form after successful submission
      setNewPayroll({
        PayrollDate: '',
        EmployeeID: '',
        GrossPay: '',
        TotalDeductions: '',
        NetPay: ''
      });
    } catch (error) {
      console.error('Error adding payroll:', error);
    }
  };

  return (
    <div className="add-payroll-form">
      <h2>Add Payroll</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="payrollDate">Payroll Date</label>
          <input type="date" id="payrollDate" name="PayrollDate" value={newPayroll.PayrollDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="employeeID">Employee ID</label>
          <input type="text" id="employeeID" name="EmployeeID" value={newPayroll.EmployeeID} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="grossPay">Gross Pay</label>
          <input type="number" id="grossPay" name="GrossPay" value={newPayroll.GrossPay} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="totalDeductions">Total Deductions</label>
          <input type="number" id="totalDeductions" name="TotalDeductions" value={newPayroll.TotalDeductions} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="netPay">Net Pay</label>
          <input type="number" id="netPay" name="NetPay" value={newPayroll.NetPay} onChange={handleChange} />
        </div>
        <button type="submit" disabled={isLoading}>Add Payroll</button>
        {/* Show loading indicator while submitting */}
        {isLoading && <p>Loading...</p>}
        {/* Show error message if mutation fails */}
        {isError && <p>Error adding payroll</p>}
      </form>
    </div>
  );
};

export default AddPayrollForm;
