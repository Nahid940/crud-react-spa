import React, { Component,useEffect,useState } from 'react'
import './styles.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const SearchInput=(props)=>
{

    const [searchValue,setSearchValue]=useState('')
    const [results,setResults]=useState([])
    const [item,setItem]=useState({})

    const handleChange=(e)=>
    {
        e.preventDefault()
        const {name,value}=e.target
        setSearchValue(value)
    }
    
    useEffect(()=>{
        let cancel;
        axios.get(`http://localhost/ecommerce-api/apis/products.php`,{
            params:{
                'search_product':1,
                'key':searchValue,
            },
            cancelToken:new axios.CancelToken(c=>cancel=c)
        }).then(res=>{
            setResults(res.data.products)
        }).catch(e=>{
            if(axios.isCancel(e)) return 
        })
        return()=> cancel()
    },[searchValue])

    // const addItem=(key)=>
    // {
    //     const item=results[key]
    //     setItem(item)
    //     console.log(item)
    // }
    return (
        <div className="col-md-12">
            <div className="form-group has-feedback">
                <input type="text" className="form-control" onChange={handleChange} placeholder="Search Product Here...."/>
                <div className="form-control-feedback">
                    <i className="icon-search4 text-size-base"></i>
                </div>
            </div>
            <div className={results.length>=1?'search-reasult':"search-reasult result-hidden"}>
                <ul>
                    {
                        results.map((result,index)=>(
                            <li key={index} onClick={()=>props.handleItem(result)}> <a>{result.product_title}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchInput