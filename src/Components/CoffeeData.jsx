import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCoffee } from "../Redux/AppReducer/action";

export default function CoffeeData() {

  const dispatch=useDispatch()

      const {isLoading,isError,coffeeData }=useSelector((store)=>{

        return {
          isLoading:store.isLoading,
          isError:store.isError,
          coffeeData:store.coffeeData
        }
      })
    
    
      useEffect(()=>{

        getCoffee(dispatch)

      },[])
      
      console.log(isLoading,isError,coffeeData)
    
  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
        {isLoading && <h1>Loading...</h1> }
        {isError && <h1>Error</h1>}
        {coffeeData.length > 0 && coffeeData.map((ele)=>(
          <div style={{display:"grid",gridtemplateColumns:"repeat(2,1fr)"}}>
           <img src={ele.image} alt=""  width="30%"/>
           <h2>{ele.title}</h2>
            <p>{ele.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
