import React, { useState } from 'react';
import './Position.scss';
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const Position = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedPositionId, setEditedPositionId] = useState(null);
    const [newPosition, setNewPosition] = useState({
        id: '',
        position: '',
        employeeName: ''
    });
    const [positions, setPositions] = useState([
        { id: 1, position: 'Manager', employeeName: 'John Doe', tools: ['edit', 'delete'] },
        { id: 2, position: 'Developer', employeeName: 'Jane Smith', tools: ['edit', 'view details'] },
        { id: 3, position: 'Designer', employeeName: 'Alice Johnson', tools: ['edit', 'preview'] },
        { id: 4, position: 'HR', employeeName: 'Bob Brown', tools: ['edit', 'view employees'] },
        { id: 5, position: 'Accountant', employeeName: 'Eve Williams', tools: ['edit', 'generate report'] }
    ]);

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedPositionId(id);
        const positionToEdit = positions.find(item => item.id === id);
        setNewPosition(positionToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedPositions = positions.filter(item => item.id !== id);
        setPositions(updatedPositions);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPosition({ ...newPosition, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const updatedPositions = positions.map(item => {
                if (item.id === editedPositionId) {
                    return { ...newPosition };
                }
                return item;
            });
            setPositions(updatedPositions);
        } else {
            setPositions([...positions, { ...newPosition, id: positions.length + 1 }]);
        }
        setNewPosition({
            id: '',
            position: '',
            employeeName: ''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedPositionId(null);
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

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="position" placeholder="Position" value={newPosition.position} onChange={handleInputChange} />
                    <input type="text" name="employeeName" placeholder="Employee Name" value={newPosition.employeeName} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Employee Name</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map(position => (
                        <tr key={position.id}>
                            <td>{position.position}</td>
                            <td>{position.employeeName}</td>
                            <td>
                                <button onClick={() => handleEdit(position.id)}>Edit</button>
                                <button onClick={() => handleDelete(position.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Position;
