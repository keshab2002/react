import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'USD',
    amountDisable = false,
    currencyDisable = false,

}) {
    let inputId = useId()
    return (
        <>
            <div className='bg-indigo-600/80 w-180 h-25 rounded-xl text-black text-xl flex items-center justify-between'>

                <div className='flex flex-col justify-evenly mx-5 gap-3'>
                    <label htmlFor={inputId}>{label}</label>
                    <input type="number" value={amount} id={inputId} 
                    disabled= {amountDisable}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>

                <div className='flex flex-col justify-evenly mx-5 gap-3'>


                    <label htmlFor="">Currency</label>

                    <select id="" className='bg-gray-800/50  text-gray-50 text-sm rounded-lg outline-none focus:outline-none block w-40 p-2.5'
                    disabled = {currencyDisable}
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    >

                        {currencyOptions.map((currency)=>{
                            return <option key={currency} value= {currency} >{currency}</option>
                        })}
                    </select>

                </div>

            </div>
        </>
    )
}

export default InputBox;