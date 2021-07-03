import axios from 'axios';

export const GetEmployees = () =>{
    return axios.get("http://localhost:3000/employees")
} 

export const UpdateEmployee = (employeeID, statusID) =>{
    return axios.patch(`http://localhost:3000/employees/${employeeID}`,{statusID: statusID})
} 

export const AddEmployee = (employee) =>{
    return axios.post(`http://localhost:3000/employees`,employee)
} 