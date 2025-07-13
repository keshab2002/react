import { useDebugValue, useState } from 'react'
import Btn from './components/Button';
function App() {

  const [bgColor, setBgColor] = useState('black');

  const colors = ['orange', 'olive', 'green', 'yellow', 'purple', 'red', 'white'];

  return (
    <>
      <div className='w-screen h-screen flex items-end justify-center ' style={{backgroundColor: bgColor}} > 

        <div className='w-350 h-20 rounded-3xl mb-10 flex items-center justify-evenly ' style={{backgroundColor: '#313131'}} >

          {
            colors.map((color)=>{
              return <Btn  key={color} color = {color} setBgColor = {setBgColor} />
            })
          }

          

        </div>

      </div>
    </>
  )
}

export default App
