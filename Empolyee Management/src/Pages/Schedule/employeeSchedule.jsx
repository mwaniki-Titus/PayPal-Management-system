import React from 'react';

const EmployeeDetailsForm = ({ employees }) => {
    console.log("Employees data:", employees); 

    if (!employees) {
        return <div>Loading employees...</div>;
    }

    if (!Array.isArray(employees)) {
        console.error("Invalid employees data:", employees);
        return <div>Unable to display employee data due to an unexpected error.</div>;
    }

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
                    {employees&& employees.map((employee) => (
                        <tr className="details" key={employee.EmployeeID}>
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


