import React from "react";

export default function RenderEmployees(props) {
    
        return (
            <tbody>

            <tr key={props.key}>
                <td>
                    <img alt="picture" src={props.picture}/>
                   
                </td>
                <td>{props.first} {props.last}</td>
                <td>{props.cell}</td>
                <td>{props.email}</td>
                <td>{props.city},{props.state}</td>
               
               
            </tr>
            </tbody>
        )};
