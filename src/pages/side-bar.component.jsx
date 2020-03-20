import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const SideBar=()=>
{
    return(
        <div className="sidebar sidebar-main sidebar-default">
            <div className="sidebar-fixed">
                <div className="sidebar-content">
                    
            
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-title">
                            <span>Navigation</span>
                            <ul className="icons-list">
                                <li><a href="#" data-action="collapse"></a></li>
                            </ul>
                        </div>

                        <div className="category-content no-padding">
                            <ul className="navigation navigation-main navigation-accordion">
                                <li className="navigation-header"><span>Actions</span> <i className="icon-menu" title="Actions"></i></li>
                                <li><Link to="/"><i className="icon-home"></i> <span>Home</span></Link></li>
                                <li className="">
									<a href="#" className="has-ul legitRipple"><i className="icon-stack2"></i> <span>Products</span><span className="legitRipple-ripple"></span></a>
									<ul className="hidden-ul">
										<li><Link to="/add-new-product" className="legitRipple">Add New</Link></li>
									</ul>
								</li>
                                
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )

}
export default SideBar