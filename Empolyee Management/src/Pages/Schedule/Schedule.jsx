import React, { useState } from 'react';
import './Schedule.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const ScheduleTable = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedScheduleId, setEditedScheduleId] = useState(null);
    const [newSchedule, setNewSchedule] = useState({
        id: '',
        employeeName: '',
        startTime: '',
        endTime: '',
        date: ''
    });
    const [schedule, setSchedule] = useState([
        { id: 1, employeeName: 'John Doe', startTime: '09:00', endTime: '17:00', date: '2024-03-12',},
        { id: 2, employeeName: 'Jane Smith', startTime: '10:00', endTime: '18:00', date: '2024-03-12', },
        { id: 3, employeeName: 'Alice Johnson', startTime: '08:30', endTime: '16:30', date: '2024-03-13',  },
        { id: 4, employeeName: 'Bob Brown', startTime: '09:30', endTime: '17:30', date: '2024-03-13',  },
        { id: 5, employeeName: 'Eve Williams', startTime: '09:00', endTime: '17:00', date: '2024-03-14',  }
    ]);

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedScheduleId(id);
        const scheduleToEdit = schedule.find(item => item.id === id);
        setNewSchedule(scheduleToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedSchedule = schedule.filter(item => item.id !== id);
        setSchedule(updatedSchedule);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSchedule({ ...newSchedule, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const updatedSchedule = schedule.map(item => {
                if (item.id === editedScheduleId) {
                    return { ...newSchedule };
                }
                return item;
            });
            setSchedule(updatedSchedule);
        } else {
            setSchedule([...schedule, { ...newSchedule, id: schedule.length + 1 }]);
        }
        setNewSchedule({
            id: '',
            employeeName: '',
            startTime: '',
            endTime: '',
            date: '',
            // overtime:''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedScheduleId(null);
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
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="employeeName" placeholder="Employee Name" value={newSchedule.employeeName} onChange={handleInputChange} />
                    <input type="time" name="startTime" placeholder="Start Time" value={newSchedule.startTime} onChange={handleInputChange} />
                    <input type="time" name="endTime" placeholder="End Time" value={newSchedule.endTime} onChange={handleInputChange} />
                    <input type="date" name="date" placeholder="Date" value={newSchedule.date} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                        {/* <th>Overtime</th> */}
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(item => (
                        <tr key={item.id}>
                            <td>{item.employeeName}</td>
                            <td>{item.startTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.date}</td>
                            {/* <td>{item.overtime}</td> */}
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
