import React from 'react';
import dashboardIcon from '../assets/icons8-dashboard-30.png';
import attendanceIcon from '../assets/icons8-attendance-50.png';
import employeeIcon from '../assets/icons8-employee-50 (1).png';
import positionIcon from '../assets/icons8-user-location-64.png';
import deductionsIcon from '../assets/icons8-discount-50 (1).png';
import payrollIcon from '../assets/icons8-payroll-64 (2).png';
import scheduleIcon from '../assets/icons8-schedule-50.png';
import './SideMenu.scss';
// import { NavLink } from 'react-router-dom';

function SideMenu() {
  const items = [
    { type: 'heading', name: 'Reports' },
    {
      name: 'Dashboard',
      icon: dashboardIcon,
      path: '/dashboard',
    },
    { type: 'heading', name: 'Manage' },
    {
      name: 'Attendance',
      icon: attendanceIcon,
      path: '/attendance',
    },
    {
      name: 'Employee',
      icon: employeeIcon,
      path: '/employee',
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
      <div className="menu-down">
        {items.map((item, index) => {
          if (item.type === 'heading') {
            return (
              <div key={index} className="menu-heading">
                <h3>{item.name}</h3>
              </div>
            );
          } else {
            return (
              <div key={index} className="menu-item">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SideMenu;
