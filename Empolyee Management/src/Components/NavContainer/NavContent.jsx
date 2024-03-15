import React, { useState } from 'react';
import './NavContent.scss';
import Avatar from '../../../src/assets/Avatar (4).png';
import MenuIcon from '../../../src/assets/menu-2.png';
import ProfileManagement from '../../Employee/Components/Employee/ProfileManagement';
import arrow from '../../assets/icons8-arrow-64.png';
import { useNavigate } from 'react-router-dom';

const NavContent = () => {
    const navigate = useNavigate();
    const [showProfileForm, setShowProfileForm] = useState(false);

    const toggleProfileForm = () => {
        setShowProfileForm(!showProfileForm);
    };

    const handleLogout = () => {
        localStorage.removeItem("userDetails");
       
        navigate("/");
    };

    return (
        <div className={`NavContent ${showProfileForm ? 'showProfileForm' : ''}`}>
            <div className='NavLeft'>
                <img src={MenuIcon} alt="Menu" className="menu-icon" />
            </div>
            <div className='NavRight'>
                <div className='profile'>
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <div className='profile-form'>
                        <ProfileManagement />
                    </div>
                </div>
                <div className='ProfileName'>
                    <img
                        src={arrow}
                        alt="Arrow"
                        className="arrow-icon"
                        onClick={toggleProfileForm}
                    />
                </div>
                <div className='logout'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default NavContent;

