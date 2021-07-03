import React, { useState } from 'react';
import EmployeeStatus from '../employeeStatus';
import { UpdateEmployee } from '../../api';
import './style.css';

const EmployeeCard = ({ employee:{id, name, statusID} }) => {
    const [selectedStatusID, setSelectedStatusID] = useState(statusID)

    const updateStatus = (sID) => {
        UpdateEmployee(id, sID).then(response=>{
            setSelectedStatusID(sID)
        })
    }

    return (
        <div className="employeeCard">
            <div>
                <div className="title">Employee Name:</div>
                <span>{name}</span>
            </div>

            <div>
                <div className="title">Employee Status:</div>
                <EmployeeStatus statusID={selectedStatusID} setStatusID={updateStatus} />
            </div>
        </div>
    );
}

export default EmployeeCard;