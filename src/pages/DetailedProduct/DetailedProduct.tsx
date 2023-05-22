import { useContext, useMemo } from "react";
import { AppContext } from "../../App";
import { useParams, useSearchParams } from "react-router-dom";

const DetailedProduct = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  const params = useParams();

  const [searchParams,setSearchParams] = useSearchParams();

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

  return <>{product ? <div> 
    <h1>{product.name}</h1>
    {searchParams.get("price")}
    
  </div> : "Product not available"}</>;
};

export default DetailedProduct;
