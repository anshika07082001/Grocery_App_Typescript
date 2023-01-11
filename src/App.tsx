import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Image4 from './components/Image4';
import Images from './components/Images';
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
    <>
      <Navbar/>  
      <Banner/>   
      <Images/>
      <Products prod={prod}/>
      <Image4/> 
      <Footer/>
    </>
  );
}

export default App;
