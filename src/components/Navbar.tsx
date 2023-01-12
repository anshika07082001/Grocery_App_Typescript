import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' col-12 d-flex flex-row border border-bottom align-items-center justify-content-around p-1 pt-3 pb-3'>
        <div className='d-flex flex-row col-8 align-items-center justify-content-around'>
            <Link to='/body'>
            <div className='col-9 d-flex flex-column'>
                <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg' alt=''/>
                <img className='mt-1' src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/shop_by_category_nov26.jpg' alt=''/>
            </div>
            </Link>
            <div className='d-flex flex-row col-5 align-items-center justify-content-center ms-4 border border-grey p-1 text-light-emphasis pt-2 pb-2 ps-2'>
                <input placeholder='Choose from over 20000+ products across the br' className='col-11 border-0' style={{outline:'none'}}/>
                <i className="bi bi-search ps-1"></i>
            </div>
            <div className='col-3 d-flex flex-row align-items-center'>
                <i className="bi bi-geo-alt fs-2 text-success"></i>
                <div className='d-flex flex-column fw-lighter ps-1'>
                    <span>Collect From Store</span>
                    <span>Pacific Mall Delhi</span>
                </div>
            </div>
        </div>
        <div className=' col-3 d-flex flex-row'>
            <Link to='/signIn' className='text-decoration-none text-dark'>
                <div className='d-flex flex-row align-items-center'>
                    <i className="bi bi-chevron-down p-1"></i>
                    <i className="bi bi-person fs-3 text-success"></i>
                </div>
            </Link>
            <Link to='/cart' className='text-decoration-none text-dark'>
                <div className='d-flex flex-row align-items-center'>
                    <i className="bi bi-chevron-down p-1"></i>
                    <i className="bi bi-cart fs-3 text-success"></i>
                    <div className='d-flex flex-column ps-1 fw-light'>
                        <span>My Cart</span>
                        <span className='fw-bolder text-danger fs-5'>0 Items</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar