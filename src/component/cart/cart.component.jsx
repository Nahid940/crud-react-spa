import React, { Component } from 'react'

const Cart=(props)=>
{

    

    return (
        <tr>
            <td><input type="text" className="form-control" name="product_title" onChange={(e)=>props.changeFuction(props.index,'title',e.target.value)} value={props.item.product_title} placeholder="Product Title"/></td>
            <td><input type="text" className="form-control" name="quantity" onChange={(e)=>props.changeFuction(props.index,'quantity',e.target.value)} value={props.item.quantity} placeholder="Quantity"/></td>
            <td><input type="text" className="form-control" name="price" onChange={(e)=>props.changeFuction(props.index,'price',e.target.value)} value={props.item.price} placeholder="Price"/></td>
            <td><a onClick={()=>props.remove(props.item.id)}><i className="icon-trash"></i></a></td>
        </tr>
    )
}

export default Cart