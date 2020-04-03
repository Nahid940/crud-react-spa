import React, { Component,useEffect,useState,useRef } from 'react'
import './styles.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const SearchInput=(props)=>
{

    const [searchValue,setSearchValue]=useState('')
    const [results,setResults]=useState([])
    const [item,setItem]=useState({})
    const inputRef=useRef("")


    const handleChange=(e)=>
    {
        e.preventDefault()
        const {name,value}=e.target
        setSearchValue(value)
        props.handleShowResult(true)
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
            // res.data.products.length?props.handleShowResult(true):props.handleShowResult(false)
        }).catch(e=>{
            if(axios.isCancel(e)) return 
        })
        return()=> cancel()
    },[searchValue])

    return (
        <div className="col-md-12">
            <h3>Search item by name</h3>
            <div className="form-group has-feedback">
                <input type="text" ref={props.myref} className="form-control" onChange={handleChange} placeholder="Search Product Here...."/>
                <div className="form-control-feedback">
                    <i className="icon-search4 text-size-base"></i>
                </div>
            </div>
            <div className={results.length>=1 && props.showResult?'search-reasult':"search-reasult result-hidden"}>
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