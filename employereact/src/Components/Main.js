import React, {useState, useEffect} from "react";
import axios from "axios";
import TableCard from "./TableCard.js"

export default function Main() {

    const [employeeData, setEmployeeData]= useState([]);
    const [queryFilter, setQueryFilter]= useState("");

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=40&nat=us").then((res) => {
            setEmployeeData(res.data.results)
            
        });
    },[]);

    function search(employees){
        return employees.filter((employee) =>
        employee.name.first.toLowerCase().indexOf(queryFilter)> -1 
        )
    }

    

    return (
      <>
        <div>
          <input
            className="search"
            type="text"
            value={queryFilter}
            onChange={(e) => setQueryFilter(e.target.value)}
          />
        </div>
        <div>
          <TableCard
          employeeData={search(employeeData)}/>
        </div>
      </>
    );
};