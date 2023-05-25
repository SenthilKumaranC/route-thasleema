import { ChangeEvent, useCallback, useEffect, useState } from "react";

export interface ICustomInput{
    defaultValue:string;
    onChildChange:any;
    name:string;
    labelName: string;
    validationFunction: any;
}

const CustomInput = (props:ICustomInput) => {

    const {name,onChildChange,defaultValue,labelName,validationFunction} = props;

    const [value, setValue] = useState<string>(defaultValue || "");

    const [error,setError] = useState("");

    useEffect(()=>{
       const valid = validationFunction(value);
       onChildChange({name,value,valid})
    },[name, onChildChange, value,validationFunction])

    const onValueChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    },[])

    const checkError = useCallback(()=>{
        const valid = validationFunction(value);
        setError(valid)
    },[validationFunction, value])

    const removeError = useCallback(()=>{
        setError("")
    },[])

    return <div>
        <label htmlFor={name}>{labelName}</label>
        <input onFocus={removeError} onBlur={checkError} id={name} onChange={onValueChange} value={value}></input>
        { !!error && <span>{error}</span> }
    </div>
    
}

export default CustomInput;