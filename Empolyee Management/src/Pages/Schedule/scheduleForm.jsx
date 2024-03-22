import React, { useState } from 'react';
import { useAddScheduleMutation } from '../../Features/schedule/ScheduleApi';
import './scheduleForm.scss'; 

const ScheduleForm = ({ isOpen, onClose, onSubmit, initialSchedule }) => {
    const [newSchedule, setNewSchedule] = useState(initialSchedule || {
        InTime: '',
        OutTime: '',
        scheduleName: ''
    });

    const [addScheduleMutation] = useAddScheduleMutation(); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSchedule(prevSchedule => ({
            ...prevSchedule,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await addScheduleMutation(newSchedule);
            if (error) {
                console.error('Error adding schedule:', error);
                // Handle error
            } else {
                onSubmit(data); // Assuming onSubmit is used to update UI after successful addition
                handleClose();
            }
        } catch (error) {
            console.error('Error adding schedule:', error);
        }
    };

    const handleClose = () => {
        setNewSchedule({
            InTime: '',
            OutTime: '',
            scheduleName: ''
        });
        onClose();
    };

    return (
        <div className={`custom-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="time" name="InTime" placeholder="Start Time" value={newSchedule.InTime} onChange={handleInputChange} />
                    <input type="time" name="OutTime" placeholder="End Time" value={newSchedule.OutTime} onChange={handleInputChange} />
                    <input type="text" name="scheduleName" placeholder="Schedule Name" value={newSchedule.scheduleName} onChange={handleInputChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default ScheduleForm;
