

import React from 'react';
import './Schedule.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const ScheduleTable = () => {
    const schedule = [
        { id: 1, employeeName: 'John Doe', startTime: '09:00', endTime: '17:00', date: '2024-03-12' },
        { id: 2, employeeName: 'Jane Smith', startTime: '10:00', endTime: '18:00', date: '2024-03-12' },
        { id: 3, employeeName: 'Alice Johnson', startTime: '08:30', endTime: '16:30', date: '2024-03-13' },
        { id: 4, employeeName: 'Bob Brown', startTime: '09:30', endTime: '17:30', date: '2024-03-13' },
        { id: 5, employeeName: 'Eve Williams', startTime: '09:00', endTime: '17:00', date: '2024-03-14' }
    ];
    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
       
        console.log("Deleting item with ID:", id);
    };

    return (

        
        <div className="schedule-table">
            <div className="TopMenu">
            <div className="CurrentPage">
               <h1>Schedule</h1>
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
                        <th>Employee Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                        <th>Tools</th> {/* Added Tools column */}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(item => (
                        <tr key={item.id}>
                            <td>{item.employeeName}</td>
                            <td>{item.startTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.date}</td>
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

export default ScheduleTable;
