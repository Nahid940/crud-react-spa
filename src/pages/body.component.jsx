import React, { Component } from 'react'
import SideBar from './side-bar.component'
import Dashboard from './dashboard.component'

const Body=()=>
{
    return(
        <div className="page-container">
		    <div className="page-content">
                <SideBar/>
                <div className="content-wrapper">
                    <Dashboard/>
                </div>
            </div>
        </div>
    )
}

export default Body