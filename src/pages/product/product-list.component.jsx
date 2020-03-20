import React, { useEffect,useState } from 'react'
import axios from 'axios'

const ProductList=()=>
{
	const[products,setProducts]=useState([])
	const [currentPage,setCurrentPage]=useState(1)

	useEffect(()=>{
		axios.get('http://localhost/ecommerce-api/apis/products.php?all-products')
		.then(response=>(setProducts(...products,response.data.products)))
	},[])

    return(
        <div className="panel panel-flat">
		<div className="panel-heading">
			<h5 className="panel-title">Product List<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
		</div>

		<div className="table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th>Sl.</th>
						<th>Image</th>
						<th>Product Title</th>
						<th>Category</th>
						<th>Code</th>
						<th>Model</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product=>(
						<tr>
							<td>{product.productID}</td>
							<td><img width="60px" src={`http://localhost/ecommerce-api/${product.product_image}`} alt="Image"/></td>
							<td>{product.product_title}</td>
							<td>{product.category}</td>
							<td>{product.code}</td>
							<td>{product.model}</td>
							<td></td>
							<td>
								<a href=""><i className="icon-pen text-info"></i></a>
								&nbsp;
								<a href=""><i className="icon-trash text-danger"></i></a>
							</td>
						</tr>
					))}
					
				</tbody>
			</table>
		</div>
	</div>
    )
}

export default ProductList