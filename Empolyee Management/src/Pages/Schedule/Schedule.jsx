import React, { useState, useEffect } from 'react';
import './Schedule.scss';
import { useGetAllScheduleQuery, useAddScheduleMutation, useDeleteScheduleMutation, useGetEmployeesInScheduleQuery } from '../../Features/schedule/ScheduleApi';
import ScheduleForm from './scheduleForm';
import EmployeeDetailsForm from './employeeSchedule';


const ScheduleTable = () => {
    const { data: scheduleData, error, isLoading } = useGetAllScheduleQuery();
    const [schedule, setSchedule] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [deleteScheduleMutation] = useDeleteScheduleMutation(); 
    const [selectedSchedule, setSelectedSchedule] = useState(null); // State to store the selected schedule
    const { data: employeesData, error: employeesError, isLoading: employeesLoading } = useGetEmployeesInScheduleQuery(selectedSchedule); // Fetch employees for the selected schedule

    useEffect(() => {
        if (scheduleData) {
            setSchedule(scheduleData);
        }
    }, [scheduleData]);

    const handleEdit = (id) => {
        setSelectedSchedule(id); // Set the selected schedule ID
    };

    const handleDelete = async (id) => {
        try {
            await deleteScheduleMutation(id);
            // Update the local state after deletion
            setSchedule(prevSchedule => prevSchedule.filter(schedule => schedule.ScheduleID !== id));
        } catch (error) {
            console.error('Error deleting schedule:', error);
            // Handle error
        }
    };

    const handleSubmit = async (formData) => {
        // Add logic for form submission
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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

            <ScheduleForm
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                onSubmit={handleSubmit}
            />

            <table>
                <thead>
                    <tr>
                        <th>ScheduleID</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>ScheduleName</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(schedule => (
                        <tr key={schedule.ScheduleID}>
                            <td>{schedule.ScheduleID}</td>
                            <td>{schedule.InTime}</td>
                            <td>{schedule.OutTime}</td>
                            <td>{schedule.ScheduleName}</td>
                            <td>
                                <button onClick={() => handleEdit(schedule.ScheduleID)}>View</button>
                                <button onClick={() => handleEdit(schedule.ScheduleID)}>Edit</button>
                                <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedSchedule && (
                <div>
                    {employeesLoading ? (
                        <div>Loading employees...</div>
                    ) : employeesError ? (
                        <div>Error: {employeesError.message}</div>
                    ) : (
                        <EmployeeDetailsForm employees={employeesData} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ScheduleTable;
