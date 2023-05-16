import React from 'react';
import "./Body.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Products from '../../pages/Products/Products';

const Body = () => {
    return <div className="Body">
        <Routes>
            <Route index element={<Navigate to="products"></Navigate>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
        </Routes>
    </div>
}

export default Body;