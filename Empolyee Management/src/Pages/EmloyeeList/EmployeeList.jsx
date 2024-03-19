
import React, { useState } from 'react';
import './EmployeeList.scss';
import { useGetEmployeesQuery, useDeleteEmployeeMutation, useAddEmployeeMutation } from '../../Features/User/UserApi';
import ModalForm from './EmployeeForm';

const EmployeeList = () => {
    const { data: employees = [], error, isLoading } = useGetEmployeesQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const [addEmployee] = useAddEmployeeMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async (EmployeeID) => {
        try {
            await deleteEmployee(EmployeeID);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (formData) => {
        try {
           
            const response = await addEmployee(formData);
            const addedEmployee = response.data;
            console.log('Newly added employee:', addedEmployee);
            closeModal();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="EmployeeList-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>EmployeeList</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>
            <div className="addNew">
                <button onClick={openModal}>+ New</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Schedule</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr className="details" key={employee.EmployeeID}>
                            <td>{employee.EmployeeID}</td>
                            <td>{`${employee.FirstName} ${employee.LastName}`}</td>
                            <td>{employee.Email}</td>
                            <td>{employee.PositionID}</td>
                            <td>{employee.ScheduleID}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(employee.EmployeeID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <ModalForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default EmployeeList;




