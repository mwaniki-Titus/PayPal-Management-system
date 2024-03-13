import React from 'react';
import './Position.scss';
import Delete from '../../assets/icons8-delete-30.png'
import Edit from '../../assets/icons8-edit-24.png'

const Position = () => {
    const positions = [
        { position: 'Manager', tools: ['edit', 'delete'] },
        { position: 'Developer', tools: ['edit', 'view details'] },
        { position: 'Designer', tools: ['edit', 'preview'] },
        { position: 'HR', tools: ['edit', 'view employees'] },
        { position: 'Accountant', tools: ['edit', 'generate report'] }
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
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position, index) => (
                        <tr key={index}>
                            <td>{position.position}</td>
                            <td>
                               <button onClick={() => handleEdit(item.id)}>Edit</button>
                               <button onClick={() => handleDelete(item.id)}>Delete</button>
                              
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Position;
