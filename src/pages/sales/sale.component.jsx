import React, { Component,useEffect,useState } from 'react'
import Cart from '../../component/cart/cart.component'
import arertify from 'alertifyjs'
import SearchInput from '../../component/searchbox/search-input.component'

const Sale=()=>
{

    const [product,setProduct]=useState([
        
    ])

    const [total,setTotal]=useState(0)
    const [totalItem,setTotalItem]=useState(0)

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

    const countTotal=(items)=>
    {
        const total = product.reduce((accumulated, cur) => {
            return accumulated + cur.quantity * cur.price;
        }, 0);

        const total_qty=product.reduce((accumulated,curr)=>{
            return accumulated+parseFloat(curr.quantity===''?0:curr.quantity)
        },0)

        setTotalItem(total_qty)
        setTotal(total)
    }

    const addNwItem=()=>
    {
        const item={
            id: product.length?product[product.length-1].id+1:1,
            product_title:'',
            quantity:0,
            price:0.00,
        }
        setProduct([...product,item])
    }
    useEffect(()=>{
        countTotal(product)
    },[product])

    const removeItem=(id)=>
    {
        const newItems=product.filter(item=>item.id!=id)
        setProduct(newItems)
    }

    const handleItem=(item)=>
    {
        const {productID,product_title}=item
        const itemExist=product.find(prodct=>prodct.id==productID)
        
        if(!itemExist)
        {
            const new_item={
                id:productID,
                product_title:product_title,
                quantity:0,
                price:0.00
            }
            setProduct([...product,new_item])
        }else{
            
            const new_items=product.map(prdct=>prdct.id==productID?{...prdct,quantity:prdct.quantity+1}:prdct)
            setProduct(new_items)
        }
    }

    return(
        <div className="row">
            <form action="#" id="form">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="col-md-8">
                                <a onClick={addNwItem} className="btn btn-success">+</a>
                                <SearchInput handleItem={handleItem} />

                                <div className="col-sm-12">
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
                                            {product.length?
                                                <tbody>{product.map((prcdt,index)=><Cart item={prcdt} index={index} remove={removeItem} changeFuction={handleChange} key={index}/>)}</tbody>
                                            :null}
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <h3>Summery </h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Customer Name</td>
                                            <td><input type="text" className="form-control"/></td>
                                        </tr>
                                        <tr>
                                            <td>Total Item(s)</td>
                                            <td>{totalItem}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Amount</td>
                                            <td>{total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  
            </form>
        </div>
    )
}

export default Sale