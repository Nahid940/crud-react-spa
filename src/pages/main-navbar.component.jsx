import React, { Component } from 'react'

const MainNavbar=()=>
{
    return(
        <div className="navbar navbar-inverse bg-indigo">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html"><img src="assets/images/logo_light.png" alt=""/></a>
                <ul className="nav navbar-nav visible-xs-block">
                    <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                    <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                </ul>
            </div>
            <div className="navbar-collapse collapse" id="navbar-mobile">
                <p className="navbar-text"><span className="label bg-success-400">Online</span></p>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown dropdown-user">
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <img src="assets/images/placeholder.jpg" alt=""/>
                            <span>Victoria</span>
                            <i className="caret"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
                            <li><a href="#"><i className="icon-coins"></i> My balance</a></li>
                            <li><a href="#"><span className="badge badge-warning pull-right">58</span> <i className="icon-comment-discussion"></i> Messages</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
                            <li><a href="#"><i className="icon-switch2"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        


    )
}

export default MainNavbar