import React, { useState } from 'react';
import dashboardIcon from '../../assets/icons8-dashboard-30 (1).png';
import attendanceIcon from '../../assets/icons8-attendance-50 (1).png';
import employeeIcon from '../../assets/icons8-employee-50 (2).png';
import positionIcon from '../../assets/icons8-position-64.png';
import deductionsIcon from '../../assets/icons8-minus-100.png';
import payrollIcon from '../../assets/icons8-payroll-64 (3).png';
import scheduleIcon from '../../assets/icons8-schedule-50 (1).png';
import Avatar from '../../assets/Avatar (4).png';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';

function SideMenu() {
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);

  const toggleEmployeeDropdown = () => {
    setIsEmployeeOpen(!isEmployeeOpen);
  };

  const items = [
    // { type: 'heading', name: 'Reports' },
    // {
    //   name: 'Dashboard',
    //   icon: dashboardIcon,
    //   path: '/dashboard',
    // },
    { type: 'heading', name: 'Manage' },
    {
      name: 'Attendance',
      icon: attendanceIcon,
      path: '/attendance',
    },
    {
      name: 'Employee',
      icon: employeeIcon,
      isOpen: isEmployeeOpen,
      toggleDropdown: toggleEmployeeDropdown,
      subItems: [
        {
          name: 'Cash Advance',
          path: '/Employee/cash-advance',
        },
        {
          name: 'Overtime',
          path: '/employee/overtime',
        },
        {
          name: 'Employee List',
          path: '/employee/employee-list',
        },
      ],
    },
    {
      name: 'Position',
      icon: positionIcon,
      path: '/position',
    },
    {
      name: 'Deductions',
      icon: deductionsIcon,
      path: '/deductions',
    },
    { type: 'heading', name: 'Payments' },
    {
      name: 'Payroll',
      icon: payrollIcon,
      path: '/payroll',
    },
    {
      name: 'Schedule',
      icon: scheduleIcon,
      path: '/schedule',
    },
  ];

  return (
    <div className="side-menu">
      <div className='profile'>
        <img src={Avatar} alt="Avatar" className="avatar" />
        <div className='ProfileName'>
          <h5>Phill</h5>
        </div>  
      </div>
      <div className="menu-down">
        {items.map((item, index) => {
          if (item.type === 'heading') {
            return (
              <div key={index} className="menu-heading">
                <h3>{item.name}</h3>
              </div>
            );
          } else if (item.subItems && item.subItems.length > 0) {
            return (
              <div key={index} className="menu-item">
               
                <div className="menu-dropdown" onClick={item.toggleDropdown}>
                
                  <img src={item.icon} alt={item.name} />
                  <div>
                  <p>{item.name}</p>
                  </div>
                  {item.isOpen ? <span>;</span> : <span></span>}
                </div>
                {item.isOpen && (
                  <div className="submenu">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink to={subItem.path} key={subIndex} className="submenu-item"> 
                        <p>{subItem.name}</p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <NavLink to={item.path} key={index} className="menu-item"> 
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SideMenu;



