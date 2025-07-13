import { useState, useCallback, useEffect ,useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [useCharacter, setUseCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(()=>{
    let passcode = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(useNumber)
      str += "0123456789";
    if(useCharacter)
      str += '!@#$%^&*()_+-=';

    for(let  i = 0; i<length; i++){
      passcode +=  str.charAt( Math.floor( Math.random()* str.length ) +1 ) ;
    }
    
    setPassword(passcode)

  },[length, useNumber, useCharacter, setPassword] );

  useEffect(()=>{passwordGenerator()}, [length, useNumber, useCharacter, passwordGenerator]);

  const inpFieldRef =  useRef(null);

  const copyToClipboard = useCallback(()=>{
    inpFieldRef.current?.select()
    inpFieldRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-screen h-screen bg-black flex items-center justify-center' >

        <div className='bg-gray-800 h-75 w-200 rounded-2xl mb-45  flex flex-col items-center justify-center gap-9'>
          <h1 className='text-gray-400 text-2xl'>Password Generator</h1>
          <div className='flex justify-center items-center' >
            <input className='h-20 w-120 bg-gray-700 p-10 rounded-l-2xl focus:outline-none focus:ring-0 text-gray-400  text-xl ' type="text" value={password} 
            ref={inpFieldRef}/>

            <button className='h-20 w-25 bg-green-800 text-xl font-semibold rounded-r-2xl text-white' 
            onClick={copyToClipboard}>Copy</button>
          </div>

          <div className='flex justify-center items-center gap-10' >

            <div className='flex justify-center items-center gap-2' >

              <input className='w-30 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' type="range" min="2" max="25" 
              value= {length}
              onChange={(e)=>{
                setLength(e.target.value)
              }}/>

              <label className='text-gray-400'>Length: {length}</label>

            </div>


            <div className='flex justify-center items-center gap-2'>

              <input type="checkbox" className='w-5 h-5'
              defaultValue={useNumber} 
              onChange={()=>{
                setUseNumber( (prev) => !prev )
              }}/>

              <label className='text-gray-400' >Number</label>

            </div>

            
            <div className='flex justify-center items-center gap-2'>
              <input type="checkbox"  className='w-5 h-5'
              defaultValue={useCharacter}
              onChange={()=>{
                setUseCharacter( (prev) => !prev )
              }}/>

              <label className='text-gray-400' >Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
