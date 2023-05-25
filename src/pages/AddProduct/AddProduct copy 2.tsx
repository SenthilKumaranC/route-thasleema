import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";

const AddProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

/*   const [productName, setProductName] = useState<string>(
    searchParams.get("productName") || ""
  ); */

  
  const [brandName, setbrandName] = useState<string>(
    searchParams.get("brandName") || ""
  );
  const [description, setDescription] = useState<string>(
    searchParams.get("description") || ""
  );

  useEffect(() => {
    const data: any = { brandName, description };
    for (let key in data) {
      searchParams.set(key, data[key]);
    }
    setSearchParams(searchParams);
  }, [ brandName, description, setSearchParams, searchParams]);

 /*  const onProductChange = useCallback((e: any) => {
    setProductName(e.target.value);
  }, []);
 */
  const onBrandChange = useCallback((e: any) => {
    setbrandName(e.target.value);
  }, []);

  const onDescriptionChange = useCallback((e: any) => {
    setDescription(e.target.value);
  }, []);

  const submitForm = useCallback(() => {}, []);

  return (
    <div>
      Add Product
      <form className="" onSubmit={submitForm}>
        {/* <input onChange={onProductChange} value={productName}></input> */}
        <input onChange={onBrandChange} value={brandName}></input>
        <textarea onChange={onDescriptionChange} value={description}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddProduct;
