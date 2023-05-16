import React, { useCallback } from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    
    const gotoProducts = useCallback(()=>{
        navigate("products")
    },[navigate])

    const gotoContactUs = useCallback(()=>{
        navigate("contactus")
    },[navigate])

    return <div className="Header">
        <button onClick={gotoProducts}>Products</button>
        <button onClick={gotoContactUs}>Contact Us</button>
    </div>
}

export default Header;