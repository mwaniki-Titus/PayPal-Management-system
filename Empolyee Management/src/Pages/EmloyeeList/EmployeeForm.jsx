import React, { useState } from 'react';
import './EmployeeForm.scss';
import { useAddEmployeeMutation } from '../../Features/User/UserApi';

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
    const [newEmployee, setNewEmployee] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PositionID: '',
        ScheduleID: '',
        Location: '',
        BirthDate: '',
        Contact: '',
        Gender: '',
        admin: false,
        PhotoURL: '',
        Password: '',
        BankName: '',
        BankBranch: '',
        AccountNumber: '',
        Bio: ''
    });

    const [addEmployee] = useAddEmployeeMutation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        
            const response = await addEmployee(newEmployee);
            const addedEmployee = response.data; 
            
            onSubmit(addedEmployee);
            handleClose();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const handleClose = () => {
       
        setNewEmployee({
            FirstName: '',
            LastName: '',
            Email: '',
            PositionID: '',
            ScheduleID: '',
            Location: '',
            BirthDate: '',
            Contact: '',
            Gender: '',
            admin: false,
            PhotoURL: '',
            Password: '',
            BankName: '',
            BankBranch: '',
            AccountNumber: '',
            Bio: ''
        });
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="FirstName" placeholder="First Name" value={newEmployee.FirstName} onChange={handleInputChange} />
                    <input type="text" name="LastName" placeholder="Last Name" value={newEmployee.LastName} onChange={handleInputChange} />
                    <input type="email" name="Email" placeholder="Email" value={newEmployee.Email} onChange={handleInputChange} />
                    <input type="text" name="PositionID" placeholder="Position ID" value={newEmployee.PositionID} onChange={handleInputChange} />
                    <input type="text" name="ScheduleID" placeholder="Schedule ID" value={newEmployee.ScheduleID} onChange={handleInputChange} />
                    <input type="text" name="Location" placeholder="Location" value={newEmployee.Location} onChange={handleInputChange} />
                    <input type="date" name="BirthDate" placeholder="Birth Date" value={newEmployee.BirthDate} onChange={handleInputChange} />
                    <input type="text" name="Contact" placeholder="Contact" value={newEmployee.Contact} onChange={handleInputChange} />
                    <input type="text" name="Gender" placeholder="Gender" value={newEmployee.Gender} onChange={handleInputChange} />
                    <input type="text" name="PhotoURL" placeholder="Photo URL" value={newEmployee.PhotoURL} onChange={handleInputChange} />
                    <input type="password" name="Password" placeholder="Password" value={newEmployee.Password} onChange={handleInputChange} />
                    <input type="text" name="BankName" placeholder="Bank Name" value={newEmployee.BankName} onChange={handleInputChange} />
                    <input type="text" name="BankBranch" placeholder="Bank Branch" value={newEmployee.BankBranch} onChange={handleInputChange} />
                    <input type="text" name="AccountNumber" placeholder="Account Number" value={newEmployee.AccountNumber} onChange={handleInputChange} />
                    <textarea name="Bio" placeholder="Bio" value={newEmployee.Bio} onChange={handleInputChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;


