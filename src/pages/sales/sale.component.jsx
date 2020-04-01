import React, { Component,useEffect,useState } from 'react'
import Cart from '../../component/cart/cart.component'
import arertify from 'alertifyjs'

const Sale=()=>
{

    const [product,setProduct]=useState([
        {
            id:1,
            product_title:"Item 1",
            quantity:2,
            price:100.00
        },
        {
            id:2,
            product_title:"Item 2",
            quantity:3,
            price:300.00
        },
    ])

    const handleChange=(id,input_type,value)=>
    {
        var itmes=[...product]
        if(input_type==='title')
        {
            itmes[id].product_title=value
            setProduct(itmes)
        }
        if(input_type==='quantity')
        {
            if(isNaN(value) || value<0)
            {
                arertify.error("Invalid Quantity")
            }else
            {
                itmes[id].quantity=value
                setProduct(itmes)
            }
        }
        if(input_type==='price')
        {
            itmes[id].price=value
            setProduct(itmes)
        }
    }

    return(
        <div className="row">
            <form action="#" id="form">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="col-md-8">
                                <div className="table-responsive">
                                    <table  className="table">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {product.length?
                                                product.map((prcdt,index)=><Cart item={prcdt} index={index} changeFuction={handleChange} key={index}/>)
                                            :''}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <h3>Summery </h3>
                            </div>
                        </div>
                    </div>  
            </form>
        </div>
    )
}

export default Sale