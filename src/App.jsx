import { useState } from 'react';
import { BroswerRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BroswerRouter>
      
      <Routes>
        <Route path ="/" element = {<Home/>} />
          <Route path ="/about" element = {<About/>} />
          <Route path ="/products" element = {<Products/>} />
      </Routes>
    
    </BroswerRouter>
  );
}

export default App
