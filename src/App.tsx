import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Body from './components/Body';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';

type signUser={ name:string,email:string,pwd:string }
type logUser={ email:string,pwd:string }
type prods = { price:number,brand:string,quantity:number,_id:string }

function App() {
  var [sign,setSign]=useState<signUser[]>([])
  var [login,setLogin]=useState<logUser[]>([])
  var [products,setProducts]=useState<prods[]>([])

  
  return (
    <>
    <Navbar/>  
    <Routes>
      <Route path='/body' element={<Body productS={products} setproducts={setProducts}/>}/>
      <Route path='/cart' element={<Cart productS={products} setproducts={setProducts}/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/' element={<SignIn signIn={sign} setsign={setSign}/>}/>
      <Route path='/login' element={<Login sign={sign} logiN={login} setlogin={setLogin}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
