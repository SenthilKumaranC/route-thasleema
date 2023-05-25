import React from 'react';
import "./Body.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Products from '../../pages/Products/Products';
import DetailedProduct from '../../pages/DetailedProduct/DetailedProduct';
import AddProduct from '../../pages/AddProduct/AddProduct';

const Body = () => {
    return <div className="Body">
        <Routes>
            <Route index element={<Navigate to="products"></Navigate>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route path="products/:productId" element={<DetailedProduct></DetailedProduct>}></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="addproduct" element={<AddProduct></AddProduct>} ></Route>
        </Routes>
    </div>
}

export default Body;