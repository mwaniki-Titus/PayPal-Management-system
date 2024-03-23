import React, { useState } from 'react';
import AddOvertimeModal from './addOvertimeModal';
import {  useGetAllOvertimeRecordQuery } from '../../Features/Overtime/overtimeApi';

function OvertimeTable() {
  const { data: overtimeData, error, isLoading } = useGetAllOvertimeRecordQuery();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleEdit = (overtimeID) => {
    console.log("Editing overtime with ID:", overtimeID);
  };

  const handleDelete = (overtimeID) => {
    console.log("Deleting overtime with ID:", overtimeID);
  };

  const handleAddNew = () => {
    handleShowModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleCloseModal();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Overtime Data</h2>
      <button onClick={handleAddNew}>Add New</button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Overtime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Your form fields here */}
            <Button variant="primary" type="submit">
              Add Overtime
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

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
            <tr className='details' key={overtime.OvertimeID}>
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
