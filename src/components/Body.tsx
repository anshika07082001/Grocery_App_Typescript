import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Images from './Images'
import Products from './Products'
import data from  '../data.json';
import Image4 from './Image4';

type prods = {
  price:number,brand:string,quantity:number,_id:string,
}

type bProps={
  productS:prods[],
  setproducts:React.Dispatch<React.SetStateAction<prods[]>>
}

const Body = (props:bProps) => {
  var [prod,setProd]=useState([] as any)
  useEffect(()=>{
    prod=data
    setProd(prod)
  },[prod])
  return (
    <>
    <Banner/>
    <Images/>
    <Products prod={prod} products={props.productS} setproductS={props.setproducts}/>
    <Image4/>
    </>
  )
}

export default Body