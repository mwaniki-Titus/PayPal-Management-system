import React from 'react';
import { useGetAttendanceQuery } from '../../Features/attendance/attendanceApi';

import './Attendance.scss';

const deleteEmployee = async (id) => {
  const response = await fetch(`attendance/delete/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
};

const Attendance = () => {
  const { data: attendances, isLoading, isError } = useGetAttendanceQuery();

  const handleEdit = (id) => {
    
    console.log("Edit button clicked for employee ID:", id);
  
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="attendance-table">
          <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            {/* <th>Position</th> */}
            <th>Time In</th>
            <th>Time Out</th>
            {/* <th>Overtime</th> */}
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map(attendance => (
            <tr key={attendance.AttendanceID}>
              <td>{attendance.AttendanceID}</td>
              <td>{attendance.FirstName} {attendance.LastName}</td>
              {/* <td>{attendance.PositionID}</td> */}
              <td>{attendance.TimeIn}</td>
              <td>{attendance.TimeOut}</td>
              {/* <td>{attendance.overTime}</td> */}
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

export default Attendance;
