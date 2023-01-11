import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Images from './Images'
import Products from './Products'
import data from  '../data.json';
import Image4 from './Image4';


const Body = () => {
    var [prod,setProd]=useState([] as any)
    useEffect(()=>{
      prod=data
      setProd(prod)
    },[prod])
  return (
    <>
    <Banner/>
    <Images/>
    <Products prod={prod}/>
    <Image4/>
    </>
  )
}

export default Body