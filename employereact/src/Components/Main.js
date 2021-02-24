import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function Main() {

    const [employeeData, setEmployeeData]= useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
            console.log(res);
            setEmployeeData(res.data.results)
            
        });
    });

    const renderEmployees = () => {
        const employees = employeeData.map((employee) => {
            console.log(employee)
            return (
                <tr key={employee.login.uuid}>
                    <td>
                        <img alt="picture" src={employee.picture.thumbnail}/>
                       
                    </td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.cell}</td>
                    <td>{employee.email}</td>
                    <td>{employee.location.city},{employee.location.state}</td>
                   
                   
                </tr>
            )
        })
        return employees
    }

    return (
        <>
            <input className="search"/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>IMAGE </th>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>LOCATION</th>
                </tr>
                </thead>
                {renderEmployees()}
            </Table>
        </>
    );
};