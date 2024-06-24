import React, { useState } from 'react';
import './EmployeeList.scss';
import { useGetEmployeesQuery, useDeleteEmployeeMutation, useAddEmployeeMutation, useGetEmployeebyIDQuery, useUpdateEmployeeMutation } from '../../Features/User/UserApi';
import ModalForm from './EmployeeForm';
import EmployeeDetailsModal from './employeeDetails';
import EditEmployeeModal from './editEmployeeModal'

const EmployeeList = () => {
    const { data: employees = [], error, isLoading } = useGetEmployeesQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const [addEmployee] = useAddEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation(); 
    const { data: employeeDetails, error: employeeError, isLoading: employeeLoading, refetch: refetchEmployeeDetails } = useGetEmployeebyIDQuery();

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

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState(null);

    const handleViewEmployee = async (employee) => {
        console.log('Viewing employee:', employee);
        try {
            setSelectedEmployee(employee);
            setIsDetailViewOpen(true);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

    const handleEditEmployee = (employee) => {
        setEditedEmployee(employee);
        setIsEditModalOpen(true);
    };

    const handleUpdateEmployee = async (updatedEmployee) => {
        try {
            await updateEmployee(updatedEmployee);
            console.log('Employee updated successfully');
            setIsEditModalOpen(false);
        } catch (error) {
            console.error('Error updating employee:', error);
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
                            <td>{employee.PositionDescription}</td>
                            <td>{employee.ScheduleName}</td>
                            <td>
                                <button onClick={() => handleViewEmployee(employee)}>View</button>
                                <button onClick={() => handleEditEmployee(employee)}>Edit</button>
                                <button onClick={() => handleDelete(employee.EmployeeID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EmployeeDetailsModal isOpen={isDetailViewOpen} onClose={() => setIsDetailViewOpen(false)} employee={selectedEmployee} />
            {isModalOpen && (
                <ModalForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
            )}
            {isEditModalOpen && (
                <EditEmployeeModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} employee={editedEmployee} onUpdate={handleUpdateEmployee} />
            )}
        </div>
    );
};

export default EmployeeList;






         <th>Employee ID</th>
