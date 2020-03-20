import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './pages/main-navbar.component'
import Footer from './pages/footer.component';
import Body from './pages/body.component';
import Dashboard from './pages/dashboard.component';
import SideBar from './pages/side-bar.component';
import { Route } from 'react-router-dom'
import AddNewProduct from './pages/product/add-new-product.component';
import ProductList from './pages/product/product-list.component'

function App() {
  return (
    <>
      <MainNavbar/>
        <div className="page-container">
		        <div className="page-content">
                <SideBar/>
                <div className="content-wrapper">
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/add-new-product" component={AddNewProduct}/>
                    <Route exact path="/product-list" component={ProductList}/>
                </div>
            </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
