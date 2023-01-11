import React from 'react'
import Slider from "react-slick";

type prod ={
    _id:string,
    title:string,
    suggestion:string[],
    stock:number,
    size:string,
    price:number,
    mfdDate:string,
    images:string,
    expDate:string,
    description:string,
    category:string,
    brand:string,
    allegations:string[]  
}[]
type prodProps={
    prod:prod,
}
const Products = (props:prodProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    
    console.log(props.prod)
  return (
    <>
    <h4 className='ps-2 pt-2 text-dark-emphasis'>FRESH DEALS</h4>
    <hr className=' ms-2 me-2'/>
    <div className="col-12">
        <div style={{width: '1200px',margin:'auto'}} className='p-3'>
            <Slider {...settings}>
                {props.prod.map((item)=>{
                    return (
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src={item.images} alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>{item.brand}</label>
                        <label>{item.category}</label>
                        <label className='fw-lighter'>MRP-₹{item.price}</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    )
                })}
            </Slider>
    </div>
  </div>
  </>
  )
}

export default Products