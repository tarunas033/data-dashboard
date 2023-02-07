import * as types from "./actionType";

import { GET_COFFEE_FAILURE,
   GET_COFFEE_SUCCESS,
   GET_COFFEE_REQUEST,
   GET_EMPLOYEE_FAILURE ,
   GET_EMPLOYEE_REQUEST,
   GET_EMPLOYEE_SUCCESS,
   GET_RESTAURANT_FAILURE,
   GET_RESTAURANT_REQUEST,
   GET_RESTAURANT_SUCCESS} from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    coffeeData: [],
    restaurantData: [],
    employeeData : []
};

const reducer = (state = initialState,{type,payload}) => {
      switch (type) {
          case GET_COFFEE_REQUEST:
              return {...state,isLoading:true}
          case GET_COFFEE_SUCCESS:
              return {...state,isLoading:false,coffeeData:payload}
          case GET_COFFEE_FAILURE:
              return {...state,isLoading:false,isError:true}
          case GET_RESTAURANT_REQUEST:
              return {...state,isLoading:true}
          case GET_RESTAURANT_SUCCESS:
              return {...state,isLoading:false,restaurantData:payload}
          case GET_RESTAURANT_FAILURE:
              return {...state,isLoading:false,isError:true}
          case GET_EMPLOYEE_REQUEST:
              return {...state,isLoading:true}
          case GET_EMPLOYEE_SUCCESS:
              return {...state,isLoading:false,employeeData:payload}
          case GET_EMPLOYEE_FAILURE:
              return {...state,isLoading:false,isError:true}

        default:
          return state
      }
};

export { reducer };