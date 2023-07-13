import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MensCategory from "./screens/MensCategoryScreen/MensCategory";
import CategoryWiseProductsScreen from "./screens/CategoryWiseProductsScreen/CategoryWiseProductsScreen";
import ProductDescription from "./screens/ProductDescription/ProductDescription";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&display=swap');
</style>;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/:category" element={<MensCategory />} />
        <Route
          path="/mens/:subcategory"
          element={<CategoryWiseProductsScreen />}
        />
        <Route path="/mens/:subcategory/:id" element={<ProductDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
