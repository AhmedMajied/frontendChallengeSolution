import React from 'react';
import './style.css';

const EmployeeStatus = ({ statusID, setStatusID }) => {
    const statuses = ['Added', 'In-Check', 'Approved', 'Active', 'Inactive']

    return (
        <div className="employeeStatus">
            {statuses.map((status, i) =>
                <div key={i} className={`statusBox ${statusID > i ? 'active' : ''}`} onClick={() => setStatusID(i + 1)}>
                    {status}
                </div>
            )}
        </div>
    );
}

export default EmployeeStatus;