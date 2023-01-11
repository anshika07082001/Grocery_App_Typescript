import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
// import Banner from './components/Banner';
import Body from './components/Body';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
// import Image4 from './components/Image4';
// import Images from './components/Images';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
// import Products from './components/Products';
// import data from  './data.json';

function App() {
  // var [prod,setProd]=useState([] as any)
  // useEffect(()=>{
  //   prod=data
  //   setProd(prod)
  // },[prod])
  // console.log(data)
  return (
    <>
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
