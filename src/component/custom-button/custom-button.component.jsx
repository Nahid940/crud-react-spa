import React, { Component } from 'react'

const CustomButton=(props)=>
{
    return(
        <button  className={`btn btn-${props.btnclass}`}>
           {props.icon?<i className="icon-arrow-right14 position-right"></i>:''}{props.title}
        </button>
    )
}

export default CustomButton