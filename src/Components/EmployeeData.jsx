import React from "react";

import { getEmployee } from "../Redux/AppReducer/action";

import { useDispatch,useSelector } from "react-redux";

import { useEffect } from "react";

export default function EmployeeData() {

  const dispatch=useDispatch()

      const {isLoading,isError,employeeData}=useSelector((store)=>{

        return {
          isLoading:store.isLoading,
          isError:store.isError,
        employeeData:store.employeeData
        }

      })
    
    useEffect(()=>{
        getEmployee(dispatch)
      },[])

      console.log(isLoading,isError,employeeData)
      
  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}
        {isLoading && <h1>Loading...</h1> }
        {isError && <h1>Error</h1>}
        {employeeData.length > 0 && employeeData.map((ele)=>(
          <div style={{display:"grid",gridtemplateColumns:"repeat(2,1fr)"}}>
           <img src={ele.image} alt=""  width="30%"/>
           <h2>{ele.name}</h2>
            <p>{ele.gender}</p>
            <p>{ele.department}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
