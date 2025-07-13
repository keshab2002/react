import { useState , useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const requestUrl = `https://api.frankfurter.dev/v1/latest?base=${currency}`
    useEffect(()=>{
        console.log(requestUrl);
        fetch(requestUrl)
        .then( (res)=> res.json() )
        .then( (res) => setData(res.rates) )
    }, [currency]);
    return data;
}

export default useCurrencyInfo;