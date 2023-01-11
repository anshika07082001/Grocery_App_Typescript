import React from 'react'

const Cart = () => {
  return (
    <div className='col-12 d-flex flex-row'>
        <div className='d-flex flex-column col-8 ps-5 pt-2 pb-5'>
            <h3 className='pb-3 pt-2 border-bottom border-dark-subtle'>YOUR SHOPPING CART (1 items)</h3>
            <div className='d-flex flex-column border border-1 mt-3'>
                <table className='table'>
                    <tr className='bg-body-secondary'><th className='p-3'>ITEMS IN YOUR CART</th><th>SPAR UNIT PRICE</th><th>QUANTITY</th><th>SUB TOTAL</th><th>SAVINGS</th></tr>
                    <tr><td className='p-3'><span>Popular Maida 500g</span></td><td><span>R 29.00</span></td><td className='text-success fw-light'><span><button className='border-success text-success ps-2 pe-2  fs-4 text-center rounded-circle'>-</button><span className='p-2'>4</span><button className='border-success text-success ps-2 pe-2  fs-4 text-center rounded-circle'>+</button></span></td><td>29</td><td className='text-danger'><i className="bi bi-trash"></i><span>43</span></td></tr>
                </table>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <button className='bg-secondary text-white border-0 p-2 ps-3 pe-3 m-2 ms-3'><i className="bi bi-trash"></i><span>EMPTY CART</span></button>
                    <button className='bg-secondary text-white border-0 p-2 ps-3 pe-3 m-2 me-3'>CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
        <div className='col-3 bg-body-secondary border-1 m-3 border-dark-subtle d-flex flex-column border'>
            <span className='pb-2 ps-4 pt-3 pe-4'>COUPONS</span>
            <div className='ps-4 pt-3 pe-4'>
                <div className='col-12 border border-1 border-dark-subtle d-flex flex-row align-items-center justify-content-between'>
                    <input className='col-9 border-0 p-2' style={{outline:'none'}}/>
                    <button className='border-0 bg-secondary ps-3 p-2 text-white fw-light '>APPLY</button>
                </div>
            </div>
            <hr/>
            <span className='ps-4 pt-2 pe-4 fw-bold'>PRICE DETAILS</span>
            <div className=' fw-light d-flex flex-row align-items-center justify-content-between ps-4 pt-3 pe-4'>
                <span>Sub Total</span>
                <span>3290.23</span>
            </div>
            <hr/>
            <div className='fw-light ps-4 pt-1 pe-4 d-flex flex-row align-items-center justify-content-between'>
                <span>TOTAL</span>
                <span>3290.23</span>
            </div>
            <button className='p-2 col-12 mt-5 border-0 text-white bg-success'>PROCEED TO CHECKOUT</button>
        </div>
    </div>
  )
}

export default Cart