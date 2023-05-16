import { IProduct } from "../../App";
import "./Product.css";

const Product = (props:IProduct) => {
    return <div className="Product">
        <img src={`https://picsum.photos/200/300?random=${props.id}`} alt="mobile"/>
        {props.name}
    </div>
}

export default Product;