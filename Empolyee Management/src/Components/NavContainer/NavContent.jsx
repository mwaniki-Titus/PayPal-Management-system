import React from 'react';
import './NavContent.scss';
import Avatar from '../../../src/assets/Avatar (4).png';
import MenuIcon from '../../../src/assets/menu-2.png';

const NavContent = () => {
    return (
        <div className='NavContent'>
            <div className='NavLeft'>
                <img src={MenuIcon} alt="Menu" className="menu-icon" />

            </div>
            <div className='NavRight'>
                <div className='profile'>
                <img src={Avatar} alt="Avatar" className="avatar" />
                </div>
                <div className='ProfileName'>
                    <h5>Phill</h5>
                      <button>logout</button>

                </div>
            </div>
        </div>
    );
}

export default NavContent;
