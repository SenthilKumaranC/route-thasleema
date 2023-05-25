import { useCallback, useContext, useMemo } from "react";
import { AppContext } from "../../App";
import classes from "./DetailedProduct.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const DetailedProduct = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const gotoProducts = useCallback(() => {
    navigate("/products")
  }, [navigate])

  const product = useMemo(() => {
    if (params.productId !== undefined) {
      return products.find(
        (product) => product.id === parseInt(String(params.productId))
      );
    } else {
      return null;
    }
  }, [products, params.productId]);

  console.log(product);

  return <>
    <a onClick={gotoProducts} className={classes.BacktoProducts}>-Back to Products</a>
    {product ? <div className={classes.DetailedProduct}>
      <h2>{product.name}</h2>
      <h1>About this item:</h1>
      <ul>
        <li>Brand : {product.brand}</li>
        <li>Description : {product.description}</li>
        <li>Specification :</li>
        <ul>
          <li> Battery Level : {product.specification.batteryLevel} </li>
          <li> Camera Pixel : {product.specification.cameraPixel} </li>
          <li> Processor Type : {product.specification.processorType} </li>
        </ul>
        <li> Price : {searchParams.get("price")}</li>
      </ul>
    </div> : "Product not available"}</>;
};



export default DetailedProduct;
