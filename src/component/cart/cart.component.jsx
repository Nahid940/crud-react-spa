import React, { Component } from 'react'

const Cart=(props)=>
{
    return (
        <tr>
            <td><input type="text" className="form-control" name="product_title" onChange={(e)=>props.changeFuction(props.index,'title',e.target.value)} value={props.item.product_title} placeholder="Product Title"/></td>
            <td> 
                <div className="input-group bootstrap-touchspin">
                    <span className="input-group-btn">
                        <button className="btn btn-danger bootstrap-touchspin-down legitRipple" type="button">-</button>
                    </span>
                        <input type="text" name="quantity" onChange={(e)=>props.changeFuction(props.index,'quantity',e.target.value)} value={props.item.quantity} className="touchspin-empty form-control"/>
                    <span className="input-group-btn">
                        <button className="btn btn-success bootstrap-touchspin-up legitRipple" type="button">+</button>
                    </span>
                </div>    
            </td>
            <td><input type="text" className="form-control" name="price" onChange={(e)=>props.changeFuction(props.index,'price',e.target.value)} value={props.item.price} placeholder="Price"/></td>
            <td><a onClick={()=>props.remove(props.item.id)}><i className="icon-trash"></i></a></td>
        </tr>
    )
}

export default Cart