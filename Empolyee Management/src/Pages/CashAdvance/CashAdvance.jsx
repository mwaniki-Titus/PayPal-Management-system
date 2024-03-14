import React, { useState } from 'react';
import './CashAdvance.scss'; 
import DeleteIcon from '../../assets/icons8-delete-30.png';
import EditIcon from '../../assets/icons8-edit-24.png';

const CashAdvance = () => {
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedCashAdvanceId, setEditedCashAdvanceId] = useState(null);
    const [newCashAdvance, setNewCashAdvance] = useState({
        id: '',
        employeeName: '',
        amount: '',
        date: ''
    });
    const [cashAdvances, setCashAdvances] = useState([
        { id: 1, employeeName: 'John Doe', amount: 500, date: '2024-03-12' },
        { id: 2, employeeName: 'Jane Smith', amount: 700, date: '2024-03-12' },
        { id: 3, employeeName: 'Alice Johnson', amount: 600, date: '2024-03-12' },
        { id: 4, employeeName: 'Bob Brown', amount: 400, date: '2024-03-12' },
        { id: 5, employeeName: 'Eve Williams', amount: 800, date: '2024-03-12' }
    ]);

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedCashAdvanceId(id);
        const cashAdvanceToEdit = cashAdvances.find(cashAdvance => cashAdvance.id === id);
        setNewCashAdvance(cashAdvanceToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedCashAdvances = cashAdvances.filter(cashAdvance => cashAdvance.id !== id);
        setCashAdvances(updatedCashAdvances);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCashAdvance({ ...newCashAdvance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            const updatedCashAdvances = cashAdvances.map(cashAdvance => {
                if (cashAdvance.id === editedCashAdvanceId) {
                    return { ...newCashAdvance };
                }
                return cashAdvance;
            });
            setCashAdvances(updatedCashAdvances);
        } else {
            setCashAdvances([...cashAdvances, { ...newCashAdvance, id: cashAdvances.length + 1 }]);
        }
        setNewCashAdvance({
            id: '',
            employeeName: '',
            amount: '',
            date: ''
        });
        setShowForm(false);
        setEditMode(false);
        setEditedCashAdvanceId(null);
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
                <button onClick={() => setShowForm(true)}>+ New</button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="employeeName" placeholder="Employee Name" value={newCashAdvance.employeeName} onChange={handleInputChange} />
                    <input type="number" name="amount" placeholder="Amount" value={newCashAdvance.amount} onChange={handleInputChange} />
                    <input type="date" name="date" placeholder="Date" value={newCashAdvance.date} onChange={handleInputChange} />
                    <button type="submit">{editMode ? 'Update' : 'Add'}</button>
                </form>
            )}

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
                    {cashAdvances.map(cashAdvance => (
                        <tr key={cashAdvance.id}>
                            <td>{cashAdvance.employeeName}</td>
                            <td>{cashAdvance.amount}</td>
                            <td>{cashAdvance.date}</td>
                            <td>
                                <button onClick={() => handleEdit(cashAdvance.id)}>Edit</button>
                                <button onClick={() => handleDelete(cashAdvance.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CashAdvance;
