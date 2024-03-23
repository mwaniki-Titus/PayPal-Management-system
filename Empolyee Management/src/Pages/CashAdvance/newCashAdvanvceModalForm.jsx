import React, { useState } from 'react';
import { useCreateCashAdvancesMutation } from '../../Features/cashAdvance/cashAdvanceApi';
import './newCashAdvanceModalForm.scss';

const CashAdvanceForm = ({ isOpen, onClose, onSubmit, initialCashAdvance }) => {
    const [newCashAdvance, setNewCashAdvance] = useState(initialCashAdvance || {
        id: '',
        employeeName: '',
        amount: '',
        date: ''
    });

    const [createCashAdvance, { isLoading }] = useCreateCashAdvancesMutation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCashAdvance(prevCashAdvance => ({
            ...prevCashAdvance,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await createCashAdvance(newCashAdvance).unwrap();
            if (error) {
                console.error('Error creating cash advance:', error);
                // Handle error
            } else {
                onSubmit(data);
                handleClose();
            }
        } catch (error) {
            console.error('Error creating cash advance:', error);
        }
    };

    const handleClose = () => {
        setNewCashAdvance({
            id: '',
            employeeName: '',
            amount: '',
            date: ''
        });
        onClose();
    };

    return (
        <div className={`custom-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="employeeID" placeholder="employeeID" value={newCashAdvance.employeeName} onChange={handleInputChange} />
                    <input type="number" name="amount" placeholder="Amount" value={newCashAdvance.amount} onChange={handleInputChange} />
                    {/* <input type="date" name="date" placeholder="Date" value={newCashAdvance.date} onChange={handleInputChange} /> */}
                    <button type="submit" disabled={isLoading}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CashAdvanceForm;
