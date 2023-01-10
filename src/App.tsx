import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Products from './components/Products';
import data from  './data.json';

function App() {
  var [prod,setProd]=useState([] as any)
  useEffect(()=>{
    prod=data
    setProd(prod)
  },[prod])
  // console.log(data)
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>   
      <Products prod={prod}/> 
    </div>
  );
}

export default App;
