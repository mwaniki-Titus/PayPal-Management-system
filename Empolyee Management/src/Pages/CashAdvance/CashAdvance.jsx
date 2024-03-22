import React, { useState } from 'react';
import { useGetAllCashAdvancesQuery } from '../../Features/cashAdvance/cashAdvanceApi'
import './CashAdvance.scss'; 


const CashAdvance = () => {
    const { data: cashAdvances, error, isLoading } = useGetAllCashAdvancesQuery();
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedCashAdvanceId, setEditedCashAdvanceId] = useState(null);
    const [newCashAdvance, setNewCashAdvance] = useState({
        id: '',
        employeeName: '',
        amount: '',
        date: ''
    });

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedCashAdvanceId(id);
        const cashAdvanceToEdit = cashAdvances.find(cashAdvance => cashAdvance.id === id);
        setNewCashAdvance(cashAdvanceToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        // Handle delete logic here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCashAdvance({ ...newCashAdvance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cashAdvances) {
        return null; // Or render something else if needed
    }

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

