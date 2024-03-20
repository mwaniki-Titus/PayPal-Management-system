import React, { useState } from 'react';
import { createNewDeduction} from 'react-query';

const DeductionForm = () => {
    const [newDeduction, setNewDeduction] = useState({
        description: '',
        amount: 0,
        employeeId: '',
    });

    const queryClient = useQueryClient();
    const { mutate } = useMutation(createNewDeduction, {
        onSuccess: () => {
            queryClient.invalidateQueries('Deduction');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(newDeduction);
        setNewDeduction({
            description: '',
            amount: 0,
            employeeId: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDeduction({ ...newDeduction, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newDeduction.description}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={newDeduction.amount}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={newDeduction.employeeId}
                onChange={handleInputChange}
            />
            <button type="submit">Create Deduction</button>
        </form>
    );
};

const DeductionFormWrapper = () => {
    const createNewDeduction = async (deduction) => {
        const response = await fetch('/deductions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deduction),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    return <DeductionForm />;
};

export default DeductionFormWrapper;
