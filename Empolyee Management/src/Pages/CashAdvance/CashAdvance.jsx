import React, { useState } from 'react';
import { useGetAllCashAdvancesQuery } from '../../Features/cashAdvance/cashAdvanceApi';
import CashAdvanceForm from './newCashAdvanvceModalForm';
import './newCashAdvanceModalForm.scss';

const CashAdvance = () => {
    const { data: cashAdvances, error, isLoading } = useGetAllCashAdvancesQuery();
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedCashAdvanceId, setEditedCashAdvanceId] = useState(null);
    const [newCashAdvance, setNewCashAdvance] = useState({
        CashAdvanceID: '',
        EmployeeID: '',
        DateOfAdvance: '',
        Amount: '',
        FirstName: '',
        LastName: ''
    });

    const handleEdit = (id) => {
        setEditMode(true);
        setEditedCashAdvanceId(id);
        const cashAdvanceToEdit = cashAdvances.find(cashAdvance => cashAdvance.CashAdvanceID === id);
        setNewCashAdvance(cashAdvanceToEdit);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        // Implement delete logic here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCashAdvance({ ...newCashAdvance, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cashAdvances) {
        return null;
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
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowForm(false)}>&times;</span>
                        <CashAdvanceForm
                            isOpen={showForm}
                            onClose={() => setShowForm(false)}
                            onSubmit={handleSubmit}
                            initialCashAdvance={newCashAdvance}
                        />
                    </div>
                </div>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Cash Advance ID</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Date of Advance</th>
                        <th>Amount</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {cashAdvances.map(cashAdvance => (
                        <tr className="details" key={cashAdvance.CashAdvanceID}>
                            <td>{cashAdvance.CashAdvanceID}</td>
                            <td>{cashAdvance.EmployeeID}</td>
                            <td>{cashAdvance.FirstName} {cashAdvance.LastName}</td>
                            <td>{cashAdvance.DateOfAdvance}</td>
                            <td>{cashAdvance.Amount}</td>
                            <td>
                                <button onClick={() => handleEdit(cashAdvance.CashAdvanceID)}>Edit</button>
                                <button onClick={() => handleDelete(cashAdvance.CashAdvanceID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CashAdvance;
