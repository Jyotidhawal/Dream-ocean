import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carousel/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
