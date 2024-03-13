import React from 'react';
import './Position.scss';
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const Position = () => {
    const positions = [
        { id: 1, position: 'Manager', employeeName: 'John Doe', tools: ['edit', 'delete'] },
        { id: 2, position: 'Developer', employeeName: 'Jane Smith', tools: ['edit', 'view details'] },
        { id: 3, position: 'Designer', employeeName: 'Alice Johnson', tools: ['edit', 'preview'] },
        { id: 4, position: 'HR', employeeName: 'Bob Brown', tools: ['edit', 'view employees'] },
        { id: 5, position: 'Accountant', employeeName: 'Eve Williams', tools: ['edit', 'generate report'] }
    ];

    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
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
                <button>+ New</button>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Employee Name</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position) => (
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

