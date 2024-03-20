import React, { useState } from 'react';
import './Position.scss';
import { useGetPositionQuery, useDeletePositionMutation } from '../../Features/position/PositionApi';
import PositionForm from './positionForm';

const Position = () => {
    const [showForm, setShowForm] = useState(false); 
    const { data: positions = [], error, isLoading } = useGetPositionQuery();
    const deletePositionMutation = useDeletePositionMutation(); 

    const handleEdit = (id) => {
        
    };

    const handleDelete = async (id) => {
        try {
            
            await (id);
        } catch (error) {
            console.error('Error deleting position:', error);
            
        }
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
                                <button onClick={() => handleEdit(position.PositionID)}>Edit</button>
                                <button onClick={() => handleDelete(position.PositionID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Position;
