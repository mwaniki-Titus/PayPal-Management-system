
import React, { useState } from 'react';
import './Position.scss';
import { useGetPositionQuery, useDeletePositionMutation } from '../../Features/position/PositionApi';
import PositionForm from './positionForm';
import EditPositionModalForm from './editPosition';

const Position = () => {
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingPosition, setEditingPosition] = useState(null);
    const { data: positions = [], error, isLoading } = useGetPositionQuery();
    const deletePositionMutation = useDeletePositionMutation();

    const handleEdit = (position) => {
        setEditingPosition(position);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await deletePositionMutation(id);
        } catch (error) {
            console.error('Error deleting position:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingPosition(null);
    };

    const handleSavePosition = (updatedPosition) => {
        const updatedPositions = positions.map(pos => {
            if (pos.PositionID === updatedPosition.PositionID) {
                return updatedPosition;
            }
            return pos;
        });
        // Update positions state with the updated position
        // Handle closing modal
        setShowModal(false);
        setEditingPosition(null);
    };

    return (
        <div className="positions-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>Position</h1>
                </div>
                <div className='Navigate'>
                    <button>Dashboard</button>
                </div>
            </div>

            <div className="addNew">
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && <PositionForm setShowForm={setShowForm} />}

            <table>
                <thead>
                    <tr>
                        <th>Position ID</th>
                        <th>Position Description</th>
                        <th>Employee Name</th>
                        <th>Gross Salary</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map(position => (
                        <tr key={position.PositionID}>
                            <td>{position.PositionID}</td>
                            <td>{position.PositionDescription}</td>
                            <td>{`${position.FirstName} ${position.LastName}`}</td>
                            <td>{position.GrossSalary}</td>
                            <td>
                                <button onClick={() => handleEdit(position)}>Edit</button>
                                <button onClick={() => handleDelete(position.PositionID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <EditPositionModalForm
                    position={editingPosition}
                    onSave={handleSavePosition}
                    onCancel={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Position;
