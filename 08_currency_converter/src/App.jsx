import { useState } from 'react'
import { InputBox } from './components'
import  useCurrencyInfo  from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const currencyInfo = useCurrencyInfo(from);

  const options = [ from, ...Object.keys(currencyInfo)];

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to] ).toFixed(2));
  }

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg)] bg-cover bg-center h-screen flex items-center justify-center opacity-90" >

        <div className="bg-gray-600/55  h-100 w-200 rounded-xl flex flex-col gap-7 justify-center items-center">

          <InputBox
            label = "From"
            amount = {amount}
            onAmountChange ={setAmount}
            onCurrencyChange = {setFrom}
            currencyOptions = {options}
            selectCurrency = {from}
            amountDisable = {false}
            currencyDisable = {false}
          />

          <InputBox
            label = "To"
            amount = {convertedAmount}
            onAmountChange ={setConvertedAmount}
            onCurrencyChange = {setTo}
            currencyOptions = {options}
            selectCurrency = {to}
            amountDisable = {false}
            currencyDisable = {false}
          />





          <button className='w-50 h-12 bg-green-600/80 rounded-xl' 
            onClick={()=> convert()}
          >
            Convert {from} to {to}
          </button>

          <button className='absolute bg-orange-600/75 h-12 w-30 rounded-xl mb-20' 
            onClick={()=> swap()}
          >Swap</button>

        </div>




      </div>
    </>
  )
}

export default App


