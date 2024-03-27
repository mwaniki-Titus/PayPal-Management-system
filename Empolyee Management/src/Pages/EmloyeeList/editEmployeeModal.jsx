import React, { useState } from 'react';

const EditEmployeeModal = ({ isOpen, onClose, employee, onUpdate }) => {
    const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        try {
            await onUpdate(updatedEmployee);
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
                    <input type="text" id="lastName" name="lastName" value={updatedEmployee.lastName} onChange={handleChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={updatedEmployee.email} onChange={handleChange} />

                    <label htmlFor="positionID">Position ID:</label>
                    <input type="text" id="positionID" name="positionID" value={updatedEmployee.positionID} onChange={handleChange} />

                    <label htmlFor="scheduleID">Schedule ID:</label>
                    <input type="text" id="scheduleID" name="scheduleID" value={updatedEmployee.scheduleID} onChange={handleChange} />

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={updatedEmployee.location} onChange={handleChange} />

                    <label htmlFor="birthDate">Birth Date:</label>
                    <input type="text" id="birthDate" name="birthDate" value={updatedEmployee.birthDate} onChange={handleChange} />

                    <label htmlFor="contact">Contact:</label>
                    <input type="text" id="contact" name="contact" value={updatedEmployee.contact} onChange={handleChange} />

                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" name="gender" value={updatedEmployee.gender} onChange={handleChange} />

                    <label htmlFor="admin">Admin:</label>
                    <input type="checkbox" id="admin" name="admin" checked={updatedEmployee.admin} onChange={handleChange} />

                    <label htmlFor="photoURL">Photo URL:</label>
                    <input type="text" id="photoURL" name="photoURL" value={updatedEmployee.photoURL} onChange={handleChange} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={updatedEmployee.password} onChange={handleChange} />

                    <label htmlFor="bankName">Bank Name:</label>
                    <input type="text" id="bankName" name="bankName" value={updatedEmployee.bankName} onChange={handleChange} />

                    <label htmlFor="bankBranch">Bank Branch:</label>
                    <input type="text" id="bankBranch" name="bankBranch" value={updatedEmployee.bankBranch} onChange={handleChange} />

                    <label htmlFor="accountNumber">Account Number:</label>
                    <input type="text" id="accountNumber" name="accountNumber" value={updatedEmployee.accountNumber} onChange={handleChange} />

                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" value={updatedEmployee.bio} onChange={handleChange} />

                    <button type="button" onClick={onClose} disabled={isUpdating}>Cancel</button>
                    <button type="submit" disabled={isUpdating}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeeModal;

