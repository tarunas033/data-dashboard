import React from "react";

import { Route,Routes } from "react-router-dom";

import RestaurantData from "../Components/RestaurantData";

import CoffeeData from "../Components/CoffeeData";

import EmployeeData from "../Components/EmployeeData";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/employee-data"  element={<EmployeeData/>} />
         <Route path="/coffee-data" element={<CoffeeData/>} />
         <Route path="/restaurant-data" element={<RestaurantData/>} />
         </Routes>
  )
};

export { AllRoutes };
