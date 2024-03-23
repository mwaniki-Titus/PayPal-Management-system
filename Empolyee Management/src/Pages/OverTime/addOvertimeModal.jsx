// AddOvertimeModal.js
import React, { useState } from 'react';
import { useCreateNewOvertimeMutation } from '../../Features/Overtime/overtimeApi'
import './addOvertimeModal.scss';

const AddOvertimeModal = ({ show, handleClose }) => {
  const [number_of_hours, setNumberOfHours] = useState('');
  const [rate_per_hour, setRatePerHour] = useState('');
  const [employeeID, setEmployeeID] = useState('');

  const [createNewOvertime, { isLoading, isError, error }] = useCreateNewOvertimeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewOvertime({ number_of_hours, rate_per_hour, employeeID });
      handleClose();
    } catch (error) {
      console.error('Failed to add overtime:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="modal-header">
          <h2>Add Overtime</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="number_of_hours">Number of Hours</label>
              <input type="number" id="number_of_hours" value={number_of_hours} onChange={(e) => setNumberOfHours(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="rate_per_hour">Rate Per Hour</label>
              <input type="number" id="rate_per_hour" value={rate_per_hour} onChange={(e) => setRatePerHour(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="employeeID">Employee ID</label>
              <input type="number" id="employeeID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </form>
          {isError && <p className="error">Error: {error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddOvertimeModal;
