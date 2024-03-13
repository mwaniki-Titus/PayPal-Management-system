

import React from 'react';
import './Deduction.scss';
import Delete from '../../assets/icons8-delete-30.png';
import Edit from '../../assets/icons8-edit-24.png';

const Deduction = () => {
    const employees = [
        { 
            id: 1,
            name: 'John Doe', 
            position: 'Manager', 
            NHIF: 100, 
            NSSF: 150, 
            Loans: 50,
            Tools: ['edit', 'delete'] 
        },
        // Other employee objects...
    ];

    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
    };

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
                <button>+ New</button>
            </div>
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
                    {employees.map(employee => (
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
