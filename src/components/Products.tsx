import React from 'react'

interface prodProps{
    prod:string[],
}

interface prod {
    _id:string,
    title:string,
    suggestion:string[],
    stock:number,
    size:string,
    price:number,
    mfdDate:string,
    images:[],
    expDate:string,
    description:string,
    category:string,
    brand:string,
    allegations:[]  
}

const Products = (props:prodProps) => {
    console.log(props.prod)
  return (
  <div className="col-12">
    <div id="carouselDiv" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container d-lg-flex flex-row justify-content-around align-items-center pb-5 d--Block d-md-block">
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="container d-lg-flex flex-row justify-content-around align-items-center pb-5 d--Block d-md-block">
                <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="container d-lg-flex flex-row justify-content-around align-items-center pb-5 d--Block d-md-block">
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                    <div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div><div className="card rounded p-2 d-flex flex-column">
                        <img className="cardImg" src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/105813471.jpg" alt=""/>
                        <label className='pb-3 text-light-emphasis border-top pt-3'>Popular Moong Dal</label>
                        <label>₹127.50</label>
                        <label className='fw-lighter'>MRP-₹170.00</label>
                        <button className='p-2 border-0 bg-success text-white'>
                            <i className="bi bi-cart p-2"></i>
                            <label>Add to Cart</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDiv" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-success" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselDiv" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-success" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
  </div>
  )
}

export default Products