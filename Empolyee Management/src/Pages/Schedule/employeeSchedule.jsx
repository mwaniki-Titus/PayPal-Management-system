import React from 'react';

const EmployeeDetailsForm = ({ employees }) => {
    // Check if employees is undefined or null
    if (!employees) {
        return <div>Loading employees...</div>;
    }

    // Check if employees is not an array
    if (!Array.isArray(employees)) {
        console.error("Invalid employees data:", employees);
        return <div>Unable to display employee data due to an unexpected error.</div>;
    }

    // Check if employees array is empty
    if (employees.length === 0) {
        return <div>No employees data available.</div>;
    }

    return (
        <div className="employee-details">
            <h2>Employees in Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Schedule Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.EmployeeID}>
                            <td>{employee.EmployeeID}</td>
                            <td>{employee.FirstName}</td>
                            <td>{employee.LastName}</td>
                            <td>{employee.InTime}</td>
                            <td>{employee.OutTime}</td>
                            <td>{employee.ScheduleName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeDetailsForm;


