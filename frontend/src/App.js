import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MensCategory from "./screens/MensCategoryScreen/MensCategory";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&display=swap');
</style>;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/mens" element={<MensCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
