import React, { useState,useEffect } from 'react'
import alertify from 'alertifyjs'
import axios from 'axios'


const AddNewProduct=(props)=>
{
    const [product,setProduct]=useState({
        product_title:'',
        price:'',
        code:'',
        categoryID:'',
        model:'',
        image:'',
        unit:'',
        description:'',
    })

    const [price_error,setPrice_error]=useState(null)
    const [code_error,setCode_error]=useState(null)
    const [category,setCategory]=useState([])

    useEffect(()=>{
        axios.get('http://localhost/ecommerce-api/apis/category.php?categories_list')
        .then((response)=>{
            setCategory(...category,response.data.categories)
            })
    },[])

    const validate=()=>
    {
        if(isNaN(product.price))
        {
            setPrice_error("Price should be numeric !")
        }else{
            setPrice_error(null)
        }
        if(isNaN(product.code))
        {
            setCode_error("Code should be numeric !")
        }else
        {
            setCode_error(null)
        }
    }

    useEffect(()=>{
        validate()
    },[product.price,product.code])


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
        if(isNaN(product.price))
        {
            alertify.error("Price should be numeric !!")
            return false;
        }
        else if(isNaN(product.code))
        {
            alertify.error("Code should be numeric !!")
            return false;
        }
        else if(product.product_title=='')
        {
            alertify.error("Product title is required !!")
            return false;
        }
        else if(product.price=='')
        {
            alertify.error("Product price is required !!")
            return false;
        }
        else if(product.code=='')
        {
            alertify.error("Product code is required !!")
            return false;
        }


        alertify.confirm('Alert', 'Do you want to add this item?', function()
        {
            const prudct=new FormData(document.getElementById('form'))
            axios.post('http://localhost/ecommerce-api/apis/products.php?add_new',
                prudct,
                {headers: {'Content-type': 'multipart/form-data'}}
            ).then(response=>{

                if(response.data.status==200)
                {
                    alertify.success('Product Added Successfully !!')
                    setProduct({
                        product_title:'',
                        price:'',
                        code:'',
                        categoryID:'',
                        model:'',
                        image:'',
                        unit:'',
                        description:''
                    })
                }
            }
        )}
        , function(){ }
        );
    }


    return(
        
        <div className="row">
            <form action="#" onSubmit={handleSubmit} id="form">
                
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h5 className="panel-title">Add New Product<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
                        </div>
                        <div className="panel-body">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Product Title:</label>
                                    <input type="text" value={product.product_title} onChange={handleChange} name="product_title" className="form-control" placeholder="Product Title"/>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <span className="text-danger price_error"> {price_error}</span>
                                    <input type="text" name="price" value={product.price}  onChange={handleChange} className="form-control" placeholder="Price"/>
                                </div>
                                <div className="form-group">
                                    <label>Code:</label>
                                    <span className="text-danger code_error"> {code_error}</span>
                                    <input type="text" name="code" value={product.code}  onChange={handleChange} className="form-control" placeholder="Code"/>
                                </div>
                                <div className="form-group">
                                    <label>Model:</label>
                                    <input type="text" name="model" value={product.model}  onChange={handleChange} className="form-control" placeholder="Model"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                            
                                <div className="form-group">
                                    <label>Category:</label>
                                    <select name="categoryID" id="" onChange={handleChange} className="form-control">
                                        <option value="">Select Category</option>
                                        {category.map(ctgry=>(<option value={ctgry.categoryID} >{ctgry.category}</option>))}
                                    </select>
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
                                    <textarea rows="1" value={product.description}  onChange={handleChange} cols="5" name="description" className="form-control" placeholder="Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Image:</label>
                                    <input type="file" name="model" name="image" onChange={handleChange} className="form-control"/>
                                </div>
                                <div className="text-right">
                                    <button type="submit"  className="btn btn-primary legitRipple">Submit form <i className="icon-arrow-right14 position-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>  
            </form>
        </div>
       
    )
}
export default AddNewProduct