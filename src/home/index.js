import React, { useEffect, useState } from 'react';
import EmployeeCard from '../components/employeeCard';
import CreateEmployee from './createEmployee';
import { GetEmployees } from '../api';

const Home = () => {
    const [employees, setEmployees] = useState([])
    const [reload, toggleReload] = useState(false)

    useEffect(() => {
        GetEmployees().then(response => {
            setEmployees(response.data)
        })
    }, [reload])

    return (
        <div className="container-fluid">
            <CreateEmployee reload={() => toggleReload(r => !r)} />

            <h4>Employees</h4>
            {employees.map((employee, i) =>
                <EmployeeCard key={i} employee={employee} />
            )}
        </div>
    );
}

export default Home;
