import React from 'react'

type prods = {
    price:number,brand:string,quantity:number,_id:string,
}

type CProps ={
    productS:prods[]
    setproducts:React.Dispatch<React.SetStateAction<prods[]>>
}

const Cart = (props:CProps) => {

    // Decrement Handler
    const decHandler=(i:number)=>{
        if(props.productS[i].quantity>0){
        props.productS[i].quantity--
        props.setproducts([...props.productS])
        }
    }
    // Increment handler
    const incHandler=(i:number)=>{
        props.productS[i].quantity++
        props.setproducts([...props.productS])
    }
    // Delete handler
    const delHandler=(i:number)=>{
        props.productS.splice(i,1)
        props.setproducts([...props.productS])
    }
    
    return (
    <div className='col-12 d-flex flex-row'>
        <div className='d-flex flex-column col-11 ps-5 pt-2 pb-5'>
            <h3 className='pb-3 pt-2 border-bottom border-dark-subtle'>YOUR SHOPPING CART</h3>
            {props.productS.length!=0?
            <div className='d-flex flex-column border border-1 mt-3'>
                <table className='table'>
                    <tr className='bg-body-secondary'><th className='p-3'>ITEMS IN YOUR CART</th><th>SPAR UNIT PRICE</th><th>QUANTITY</th><th>SUB TOTAL</th><th>SAVINGS</th></tr>
                    {props.productS.map((item,i)=>{
                        return(
                            <tr>
                                <td className='p-3'><span>{item.brand}</span></td>
                                <td><span>₹{item.price}</span></td>
                                <td className='text-success fw-light'><span><button className='border-success text-success ps-2 pe-2  fs-4 text-center rounded-circle' onClick={()=>decHandler(i)}>-</button><span className='p-2'>{item.quantity}</span><button className='border-success text-success ps-2 pe-2  fs-4 text-center rounded-circle' onClick={()=>incHandler(i)}>+</button></span></td>
                                <td>{(item.price*item.quantity).toFixed(2)}</td><td className='text-danger'><i className="bi bi-trash fs-2" onClick={()=>delHandler(i)}></i></td>
                            </tr>
                        )
                    })}

                </table>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <button className='bg-secondary text-white border-0 p-2 ps-3 pe-3 m-2 ms-3'><i className="bi bi-trash"></i><span>EMPTY CART</span></button>
                    <button className='bg-secondary text-white border-0 p-2 ps-3 pe-3 m-2 me-3'>CONTINUE SHOPPING</button>
                </div>
            </div>:
            <h1 className='text-center text-success'>Cart is Empty!!</h1>}
        </div>
    </div>
    )
}

export default Cart