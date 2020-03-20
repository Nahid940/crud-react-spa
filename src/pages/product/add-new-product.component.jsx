import React, { useState } from 'react'


const AddNewProduct=(props)=>
{
    const [product,setProduct]=useState({
        product_title:'',
        price:'',
        code:'',
        model:'',
        unit:'',
        description:'',
    })


    const handleChange=(e)=>
    {
        const {name,value}=e.target
        setProduct({
            ...product,
            [name]:value
        })
    }


    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(product)
    }


    return(
        <div className="row">
            <div className="col-md-6">
                <form action="#">
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h5 className="panel-title">Add New Product<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Product Title:</label>
                                <input type="text" value={product.product_title} onChange={handleChange} name="product_title" className="form-control" placeholder="Product Title"/>
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input type="text" name="price" value={product.price}  onChange={handleChange}  onChange={handleChange} className="form-control" placeholder="Price"/>
                            </div>
                            <div className="form-group">
                                <label>Code:</label>
                                <input type="text" name="code" value={product.code}  onChange={handleChange} className="form-control" placeholder="Code"/>
                            </div>
                            <div className="form-group">
                                <label>Model:</label>
                                <input type="text" name="model" value={product.model}  onChange={handleChange} className="form-control" placeholder="Model"/>
                            </div>
                            <div className="form-group">
                                <label>Unit:</label>
                                <select name="unit" id="" onChange={handleChange} value={product.unit} className="form-control">
                                    <option value="">Select Unit</option>
                                    <option value="1">KG</option>
                                    <option value="2">Liter</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Description:</label>
                                <textarea rows="2" value={product.description}  onChange={handleChange} cols="5" name="description" className="form-control" placeholder="Description"></textarea>
                            </div>

                            <div className="text-right">
                                <button type="button" onClick={handleSubmit} className="btn btn-primary legitRipple">Submit form <i className="icon-arrow-right14 position-right"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddNewProduct