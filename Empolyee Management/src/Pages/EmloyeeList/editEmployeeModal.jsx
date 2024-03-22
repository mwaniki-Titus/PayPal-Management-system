import React, { useState } from 'react';

const EditEmployeeModal = ({ isOpen, onClose, employee, onUpdate }) => {
    const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('handleChange called');
        setUpdatedEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        try {
            console.log('Attempting to update employee:', updatedEmployee);
            await onUpdate(updatedEmployee);
            console.log('Employee updated successfully');
            onClose(); 
        } catch (error) {
            console.error('Error updating employee:', error);
        } finally {
            setIsUpdating(false); 
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={updatedEmployee.firstName} onChange={handleChange} />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="LastName" value={updatedEmployee.LastName} onChange={handleChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="Email" value={updatedEmployee.Email} onChange={handleChange} />

                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="Bio" value={updatedEmployee.Bio} onChange={handleChange} />

                    <button type="submit" disabled={isUpdating}>Update</button>
                    <button onClick={onClose} disabled={isUpdating}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeeModal;





