import React, { useState } from 'react';
import { useGetAllDeductionsQuery } from '../../Features/deduction/deductionApi'
import './Deduction.scss';


const Deduction = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedEmployeeId, setEditedEmployeeId] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: '',
        position: '',
        NHIF: '',
        NSSF: '',
        Loans: ''
    });

    // Use the useGetAllDeductionsQuery hook to fetch all deductions
    const { data: employees, isLoading, isError } = useGetAllDeductionsQuery();



    return (
        <div className="deductions-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>Deduction</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>
            <div className="addNew">
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Employee Name" value={newEmployee.name} onChange={handleInputChange} />
                    <input type="text" name="position" placeholder="Employee Name" value={newEmployee.position} onChange={handleInputChange} />
                    <input type="number" name="NHIF" placeholder="NHIF" value={newEmployee.NHIF} onChange={handleInputChange} />
                    <input type="number" name="NSSF" placeholder="NSSF" value={newEmployee.NSSF} onChange={handleInputChange} />
                    <input type="number" name="Loans" placeholder="Loans" value={newEmployee.Loans} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>EmployeeName</th>
                        <th>NHIF</th>
                        <th>NSSF</th>
                        <th>Loans</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.NHIF}</td>
                            <td>{employee.NSSF}</td>
                            <td>{employee.Loans}</td>
                            <td>
                                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Deduction;
