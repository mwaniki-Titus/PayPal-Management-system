
import React, { useState, useEffect } from 'react';
import './editPosition.scss';
import { useEditPositionMutation } from '../../Features/position/PositionApi';

const EditPositionModalForm = ({ position, onSave, onCancel }) => {
    const [editedPosition, setEditedPosition] = useState(position);
    const editPositionMutation = useEditPositionMutation();

    useEffect(() => {
        setEditedPosition(position);
    }, [position]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPosition(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedPosition = await editPositionMutation.mutateAsync({
                position_id: editedPosition.PositionID,
                newPositionData: editedPosition
            });
            onSave(updatedPosition);
        } catch (error) {
            console.error('Error editing position:', error);
        }
    };

    return (
        <div className="edit-position-modal">
            <div className="modal-content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>Edit Position</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="positionId">Position ID</label>
                        <input
                            type="text"
                            id="positionId"
                            name="PositionID"
                            value={editedPosition.PositionID}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="positionDescription">Position Description</label>
                        <input
                            type="text"
                            id="positionDescription"
                            name="PositionDescription"
                            value={editedPosition.PositionDescription}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="FirstName"
                            value={editedPosition.FirstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="LastName"
                            value={editedPosition.LastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grossSalary">Gross Salary</label>
                        <input
                            type="text"
                            id="grossSalary"
                            name="GrossSalary"
                            value={editedPosition.GrossSalary}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPositionModalForm;
