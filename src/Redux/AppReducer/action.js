import { GET_COFFEE_FAILURE,
         GET_COFFEE_SUCCESS,
         GET_COFFEE_REQUEST,
         GET_EMPLOYEE_FAILURE ,
         GET_EMPLOYEE_REQUEST,
         GET_EMPLOYEE_SUCCESS,
         GET_RESTAURANT_FAILURE,
         GET_RESTAURANT_REQUEST,
         GET_RESTAURANT_SUCCESS } from "./actionType";

import axios from "axios";

export const cr=()=>{
   return {type:GET_COFFEE_REQUEST}
}
export const cs=(payload)=>{
    return {type:GET_COFFEE_SUCCESS,payload}
}
export const ce=()=>{
    return {type:GET_COFFEE_FAILURE}
}

export const rr=()=>{
    return {type:GET_RESTAURANT_REQUEST}
}
export const rs=(payload)=>{
   return {type:GET_RESTAURANT_SUCCESS,payload}
}
export const re=()=>{
     return {type:GET_RESTAURANT_FAILURE}
}
export const er=()=>{
   return {type:GET_EMPLOYEE_REQUEST}
}
export const es=(payload)=>{
    return {type:GET_EMPLOYEE_SUCCESS,payload}
}
export const ee=()=>{
    return {type:GET_EMPLOYEE_FAILURE}
}

export const getCoffee=(dispatch)=>{
    dispatch(cr())
   return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`).then((res)=>{
       dispatch(cs(res.data.data))
    }).catch((err)=>{
       dispatch(ce())
    })
}

export const getRestaurant=(dispatch)=>{
    dispatch(rr())
   return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`).then((res)=>{
       dispatch(rs(res.data.data))
    }).catch((err)=>{
       dispatch(re())
    })
}
export const getEmployee=(dispatch)=>{
    dispatch(er())
   return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`).then((res)=>{
       dispatch(es(res.data.data))
    }).catch((err)=>{
       dispatch(ee())
    })
}

