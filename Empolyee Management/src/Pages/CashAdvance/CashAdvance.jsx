import React from 'react';
import './CashAdvance.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const CashAdvance = () => {
    const cashAdvances = [
        { id: 1, employeeName: 'John Doe', amount: 500, date: '2024-03-12' },
        { id: 2, employeeName: 'Jane Smith', amount: 700, date: '2024-03-12' },
        { id: 3, employeeName: 'Alice Johnson', amount: 600, date: '2024-03-12' },
        { id: 4, employeeName: 'Bob Brown', amount: 400, date: '2024-03-12' },
        { id: 5, employeeName: 'Eve Williams', amount: 800, date: '2024-03-12' }
    ];

    const handleEdit = (id) => {
        console.log("Editing item with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
    };

    return (
        <div className="cash-advance-table">
            <div className="TopMenu">
                <div className="CurrentPage">
                    <h1>Cash Advances</h1>
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
                        <th>Employee Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {cashAdvances.map(item => (
                        <tr key={item.id}>
                            <td>{item.employeeName}</td>
                            <td>{item.amount}</td>
                            <td>{item.date}</td>
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

export default CashAdvance;
