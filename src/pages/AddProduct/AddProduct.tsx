import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCustomSearchParams from "../../hooks/useCustomSearchParams";
import CustomInput from "../../components/CustomInput/CustomInput";

/* const validateProductName = (value:any) =>{
  //if(value !== "" && value !== undefined && value!== null)
  if(!!value && value.length >=3) 
    return true;
  else 
  return false;
}

const validateBrandName = (value:any) =>{
  if(!!value && value.length >=5) 
    return true;
  else 
  return false;
}

const validateDescription = (value:any) =>{
  if(!!value && value.length >=10) 
    return true;
  else 
  return false;
} */

const lengthValidator = (len:number) => {
  return (value:any) =>{
    //if(value !== "" && value !== undefined && value!== null)
    if(!!value && value.length >=len) 
      return undefined;
    else 
    return `Please enter more than ${len-1} characters`;
  }
}

const productNameValidator = lengthValidator(3);
const brandValidator = lengthValidator(5);
const descriptionValidator = lengthValidator(6);


const AddProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState<boolean>(true);

  const [formData,setFormData] = useState<any>({});

  /* useEffect(() => {
    const data: any = {productName, brandName, description };
    for (let key in data) {
      searchParams.set(key, data[key]);
    }
    setSearchParams(searchParams);
  }, [productName, brandName, description, setSearchParams, searchParams]);
 */
  const submitForm = useCallback(() => {}, []);

  useEffect(()=>{
    for (let key in formData) {
      searchParams.set(key, formData[key].value);
    }
    setSearchParams(searchParams);
  },[searchParams,setSearchParams,formData])

  useEffect(()=>{
    let allValid = true;
    for (let key in formData) {
      if(formData[key].valid !== undefined){
        allValid = false;
      }
    }
    setSubmitButtonDisabled(!allValid)
  },[formData])

  const onAnyChildChange = useCallback((keyValue: any) => {

    setFormData((prevFormData:any) => ({...prevFormData,[keyValue.name]:{value:keyValue.value,valid:keyValue.valid}}))
  
  }, []);

  return (
    <div>
      Add Product
      <form className="" onSubmit={submitForm}>
        <CustomInput
          labelName = "Product Name : "
          name="productName"
          onChildChange={onAnyChildChange}
          defaultValue={searchParams.get("productName") || ""}
          validationFunction={productNameValidator}
        ></CustomInput>
        <CustomInput
          labelName="Brand : "
          name="brandName"
          onChildChange={onAnyChildChange}
          defaultValue={searchParams.get("brandName") || ""}
          validationFunction={brandValidator}
        ></CustomInput>
         <CustomInput
          labelName="Description : "
          name="description"
          onChildChange={onAnyChildChange}
          defaultValue={searchParams.get("description") || ""}
          validationFunction={descriptionValidator}
        ></CustomInput>
        <button disabled={submitButtonDisabled} type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddProduct;
