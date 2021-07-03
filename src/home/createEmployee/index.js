import React, { useState } from 'react';
import { AddEmployee } from '../../api';
import './style.css';

const CreateEmployee = ({ reload }) => {
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [statusID, setStatusID] = useState(1)
    const statuses = ['Added', 'In-Check', 'Approved', 'Active', 'Inactive']

    const save = () => {
        AddEmployee({ id: id, name: name, statusID: statusID }).then(() => {
            reload()
        })
    }

    return (
        <div id="createEmployee">
            <h4> Create Employee</h4>

            <div>
                <label>ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} />
            </div>

            <div>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Status</label>
                <select value={statusID} onChange={(e) => setStatusID(e.target.value)}>
                    {statuses.map((status, i) =>
                        <option key={i} value={i + 1}>{status}</option>
                    )}
                </select>
            </div>

            <button onClick={save}>Save</button>
        </div>
    );
}

export default CreateEmployee;