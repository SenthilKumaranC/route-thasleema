import { useContext } from "react";
import { AppContext } from "../../App";
import classes from  "./Products.module.css"
import Product from "../../components/Product/Product";

const Products = () => {

    const {state} = useContext(AppContext);
    const {products} = state;
    return <div className={classes.Products}>
        {
            products.map((product) => {
                return <Product {...product} />
            })
        }
    </div>
}

export default Products;