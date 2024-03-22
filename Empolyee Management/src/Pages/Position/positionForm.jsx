import React, { useState } from 'react';
import { useAddPositionMutation } from '../../Features/position/PositionApi'; 
import './positionForm.scss'; 

const PositionForm = ({ setShowForm }) => { 
    const [positionData, setPositionData] = useState({
        position: '',
        employeeName: '',
        grossSalary: ''
    });
    const [addPosition, { error }] = useAddPositionMutation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPositionData({ ...positionData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPosition(positionData);
            console.log('Position added successfully');
            setPositionData({ position: '', employeeName: '', grossSalary: '' }); 
            setShowForm(false); 
        } catch (error) {
            console.error('Error adding position:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Create New Position</h2>
                </div>
                <div className="modal-body">
                    {error && <div className="error">{error.message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="position">Position:</label>
                            <input type="text" id="position" name="position" value={positionData.position} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="employeeName">Employee Name:</label>
                            <input type="text" id="employeeName" name="employeeName" value={positionData.employeeName} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="grossSalary">Gross Salary:</label>
                            <input type="text" id="grossSalary" name="grossSalary" value={positionData.grossSalary} onChange={handleInputChange} required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                            <button type="submit">Add Position</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PositionForm;
