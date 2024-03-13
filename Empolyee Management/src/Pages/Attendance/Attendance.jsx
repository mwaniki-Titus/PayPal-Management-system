import React from 'react';
import './Attendance.scss';
import Delete from '../../assets/icons8-delete-30.png'
import Edit from '../../assets/icons8-edit-24.png'

const Attendance = () => {


    
    const employees = [
        { id: 1, name: 'John Doe', position: 'Manager', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { id: 2, name: 'Jane Smith', position: 'Developer', timeIn: '09:30 AM', timeOut: '06:00 PM' },
        { id: 3, name: 'Alice Johnson', position: 'Designer', timeIn: '10:00 AM', timeOut: '05:30 PM' },
        { id: 4, name: 'Bob Brown', position: 'HR', timeIn: '09:15 AM', timeOut: '06:15 PM' },
        { id: 5, name: 'Eve Williams', position: 'Accountant', timeIn: '09:45 AM', timeOut: '05:45 PM' }
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
               <h1>Attendance</h1>
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
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.timeIn}</td>
                            <td>{employee.timeOut}</td>
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

export default Attendance;
