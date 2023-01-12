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
    allegations:string[],
    quantity:number
}

type prods = {
    price:number,brand:string,quantity:number,_id:string,
}

type prodProps={
    prod:prod[],
    products:prods[],
    setproductS:React.Dispatch<React.SetStateAction<prods[]>>
}


const Products = (props:prodProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

      const addCart=(ind:number)=>{
        var obj:prods ={_id:props.prod[ind]._id,price:props.prod[ind].price,brand:props.prod[ind].brand,quantity:props.prod[ind].quantity++}
        if(props.products.length>0){
            let existIndex=-1
            props.products.map((item,i)=>{
                if(item._id==props.prod[ind]._id){
                  existIndex=i
                }
            })
            if(existIndex!==-1){
                props.products[existIndex].quantity++
            }
            else{
                props.products.push(obj)
            }
        }
        else{
            props.products.push(obj)
        }
        props.setproductS([...props.products])
        alert('successfully Added to Cart')
      }
    
    return (
    <>
    <h4 className='ps-2 pt-2 text-dark-emphasis'>FRESH DEALS</h4>
    <hr className=' ms-2 me-2'/>
    <div className="col-12">
        <div style={{width: '1200px',margin:'auto'}} className='p-3'>
            <Slider {...settings}>
                {props.prod.map((item,i)=>{
                    return (
                    <div className="card rounded p-2 d-flex flex-column" >
                        <img className="cardImg" src={item.images} alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>{item.brand}</label>
                        <label>{item.category}</label>
                        <label className='fw-lighter'>MRP-₹{item.price}</label>
                        <button className='p-2 border-0 bg-success text-white' onClick={()=>addCart(i)}>
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