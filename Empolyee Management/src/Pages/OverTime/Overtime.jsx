import React, { useState, useEffect } from 'react';

function OvertimeTable() {
  const [overtimeData, setOvertimeData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    EmployeeID: '',
    Date: '',
    Hours: 0,
    Minutes: 0,
    Rate: 0
  });

  useEffect(() => {
    fetchOvertimeData();
  }, []);

  const fetchOvertimeData = async () => {
    const dummyData = [
      { OvertimeID: 1, EmployeeID: 1, Date: '2024-03-14', Hours: 2, Minutes: 30, Rate: 15.5 },
      { OvertimeID: 2, EmployeeID: 2, Date: '2024-03-15', Hours: 3, Minutes: 15, Rate: 20.0 },
      { OvertimeID: 3, EmployeeID: 3, Date: '2024-03-16', Hours: 4, Minutes: 0, Rate: 18.75 }
    ];
    setOvertimeData(dummyData);
  };

  const handleEdit = (overtimeID) => {
    console.log("Editing overtime with ID:", overtimeID);

  };

  const handleDelete = (overtimeID) => {
    console.log("Deleting overtime with ID:", overtimeID);
  
    setOvertimeData(overtimeData.filter(entry => entry.OvertimeID !== overtimeID));
  };

  const handleAddNew = () => {
    console.log("Adding new overtime entry");
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newID = Math.max(...overtimeData.map(entry => entry.OvertimeID)) + 1;
    setOvertimeData([...overtimeData, { OvertimeID: newID, ...newEntry }]);
    setShowForm(false);
    setNewEntry({
      EmployeeID: '',
      Date: '',
      Hours: 0,
      Minutes: 0,
      Rate: 0
    });
  };

  return (
    <div>
      <h2>Overtime Data</h2>
      <button onClick={handleAddNew}>Add New</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Employee ID:
            <input type="text" name="EmployeeID" value={newEntry.EmployeeID} onChange={handleChange} />
          </label>
          <label>
            Date:
            <input type="text" name="Date" value={newEntry.Date} onChange={handleChange} />
          </label>
          <label>
            Hours:
            <input type="number" name="Hours" value={newEntry.Hours} onChange={handleChange} />
          </label>
          <label>
            Minutes:
            <input type="number" name="Minutes" value={newEntry.Minutes} onChange={handleChange} />
          </label>
          <label>
            Rate:
            <input type="number" name="Rate" value={newEntry.Rate} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>OvertimeID</th>
            <th>EmployeeID</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Rate</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {overtimeData.map((overtime) => (
            <tr key={overtime.OvertimeID}>
              <td>{overtime.OvertimeID}</td>
              <td>{overtime.EmployeeID}</td>
              <td>{overtime.Date}</td>
              <td>{overtime.Hours}</td>
              <td>{overtime.Minutes}</td>
              <td>{overtime.Rate}</td>
              <td>
                <button onClick={() => handleEdit(overtime.OvertimeID)}>Edit</button>
                <button onClick={() => handleDelete(overtime.OvertimeID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OvertimeTable;


