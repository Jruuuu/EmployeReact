import React from "react";
import RenderEmployees from "./renderemployees.js"
import Table from "react-bootstrap/Table";

export default function TableCard(props){
    return(
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>IMAGE </th>
                <th onClick ={props.sortClick}>NAME{props.currentSort}</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>LOCATION</th>
              </tr>
            </thead>
            {props.employeeData.map(employee=>
            <RenderEmployees
                key={employee.login.uuid}
                picture={employee.picture.thumbnail}
                first={employee.name.first}
                last={employee.name.last}
                cell={employee.cell}
                email={employee.email}
                city={employee.location.city}
                state={employee.location.state}
            
            />
            )}
            
          </Table>
    )
    
}