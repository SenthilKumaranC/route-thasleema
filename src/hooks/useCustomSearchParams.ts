import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
    const existingParams = useRef<any>({});

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        const entries:any = searchParams.entries() as any
        [...entries].forEach((param)=>{
            existingParams.current[param[0]] =param[1];
          console.log(param)
        })
    },[searchParams]);

    const customSetSearchParams = useCallback((newParams:any)=>{
        setSearchParams({...existingParams.current,...newParams})
    },[setSearchParams])


    return {searchParams,setSearchParams:customSetSearchParams}


}

export default useCustomSearchParams;