import { useNavigate } from "react-router-dom";
import { IProduct } from "../../App";
import "./Product.css";
import { useCallback } from "react";

const Product = (props:IProduct) => {

    const {id, name} = props;

    const navigate = useNavigate();
    const navigateToDetails = useCallback(() =>{
        navigate(`${id}?price=10000`)
    },[navigate, id])

    return <div onClick={navigateToDetails} role="button" className="Product">
        <img src={`https://picsum.photos/200/300?random=${id}`} alt="mobile"/>
        {name}
    </div>
}

export default Product;