import React, {useState, useEffect} from "react";
import axios from "axios";
import TableCard from "./TableCard.js"

export default function Main() {

    const [employeeData, setEmployeeData]= useState([]);
    const [queryFilter, setQueryFilter]= useState("");
    const [sortOrder, setSortOrder]= useState("");
    const [filteredEmployees, setfilteredEmployees]= useState([]);
    

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=40&nat=us").then((res) => {
            setEmployeeData(res.data.results)
            
        });
    },[]);

    function search(employees){
        return employees.filter((employee) =>
        employee.name.first.toLowerCase().indexOf(queryFilter)> -1 ||
        employee.name.last.toLowerCase().indexOf(queryFilter)> -1
        )
    }

    function sortOnClick(event){
        event.preventDefault();
        if(sortOrder === "^" || sortOrder ===""){
            const filteredArray = employeeData

           filteredArray.sort((a,b)=> (a.name.first < b.name.first)? 1 : -1);
           setSortOrder({sortOrder: "v"});
           setfilteredEmployees({ filteredArray})
            
        }else{
            const filteredArray = employeeData
            filteredArray.sort((a,b)=> (a.name.first > b.name.first)? 1 : -1);
            setSortOrder({sortOrder: "^"});
            setfilteredEmployees({ filteredArray})
        }
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
          employeeData={search(employeeData)}
          currentSort ={sortOrder ==='?'||'^'||'v' }
          sortClick={sortOnClick}/>
        </div>
      </>
    );
};