import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MensCategory from "./screens/MensCategoryScreen/MensCategory";
import CategoryWiseProductsScreen from "./screens/CategoryWiseProductsScreen/CategoryWiseProductsScreen";
import ProductDescription from "./screens/ProductDescription/ProductDescription";
import WomensCategory from "./screens/WomensCategory/WomensCategory";

import { Provider } from "react-redux";
import store from "../src/store";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&display=swap');
</style>;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/mens" element={<MensCategory />} />

          <Route path="/womens" element={<WomensCategory />} />
          <Route
            path="/:category/:subcategory"
            element={<CategoryWiseProductsScreen />}
          />

          <Route
            path="/:category/:subcategory/:id"
            element={<ProductDescription />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
