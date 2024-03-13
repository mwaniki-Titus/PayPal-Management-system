import React from 'react';
import './Deduction.scss';
import Delete from '../../assets/icons8-delete-30.png'
import Edit from '../../assets/icons8-edit-24.png'


const Deductions = () => {
    
    const employees = [
        { 
         
            name: 'John Doe', 
            position: 'Manager', 
            NHIF: 100, 
            NSSF: 150, 
            Loans: 50,
            Tools: ['edit', 'delete'] 
        },
        { 
         
            name: 'Jane Smith', 
            position: 'Developer', 
            NHIF: 120,
            NSSF: 130, 
            Loans: 40,
            Tools: ['edit', 'delete'] 
        },
        { 
        
            name: 'Alice Johnson', 
            position: 'Designer', 
            NHIF: 110,
            NSSF: 140, 
            Loans: 60, 
            Tools: ['edit', 'delete'] 
        },
        { 
          
            name: 'Bob Brown', 
            position: 'HR', 
            NHIF: 90,
            NSSF: 120, 
            Loans: 70,
            Tools: ['edit', 'delete'] 
        },
        { 
         
            name: 'Eve Williams', 
            position: 'Accountant', 
            NHIF: 95, 
            NSSF: 110,
            Loans: 55, 
            Tools: ['edit', 'delete']
        }
    ];
    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
       
        console.log("Deleting item with ID:", id);
    };


    return (
        
        <div className="attendance-table">

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
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.NHIF}</td>
                            <td>{employee.NSSF}</td>
                            <td>{employee.Loans}</td>
                            <td>
                               <button onClick={() => handleEdit(item.id)}>Edit</button>
                               <button onClick={() => handleDelete(item.id)}>Delete</button>
                            
                             </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Deductions;

