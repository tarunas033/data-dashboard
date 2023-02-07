import React from "react";

import { getRestaurant} from "../Redux/AppReducer/action";

import { useDispatch,useSelector } from "react-redux";

import { useEffect } from "react";

export default function RestaurantData() {

  const dispatch=useDispatch()

  const {isLoading,isError,restaurantData}=useSelector((store)=>{

    return {
      isLoading:store.isLoading,
      isError:store.isError,
      restaurantData:store.restaurantData
    }
  })


  useEffect(()=>{

    getRestaurant(dispatch)

  },[])

  console.log(isLoading,isError,restaurantData)

  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
        {isLoading && <h1>Loading...</h1> }
        {isError && <h1>Error</h1>}

        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {restaurantData.length > 0 && restaurantData.map((ele)=>(

          <div >

           <img src={ele.image} alt=""  width="30%"/>

           <h2>{ele.name}</h2>

            <p>{ele.type}</p>
            
            <p>{ele.number_of_votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
