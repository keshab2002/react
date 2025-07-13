import react from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SayMyName from './Demo.jsx'

function CustomApp() {
  return (
    <>
      <h1>This is a custom app!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi necessitatibus voluptatibus ducimus vitae? Aspernatur quaerat sapiente architecto dignissimos placeat, nesciunt enim ad, commodi laboriosam fuga ipsa odit magnam dolor!</p>
    </>
  )
}

const myVariable = 'Keshab Dey';

const domElement = react.createElement(
  'a',
  {
    'href': 'https://www.google.com',
    'target': '_blank',
  },
  'Click Me',
  myVariable
);

createRoot(document.getElementById('root')).render(
  // <>
  //   <App />
  //   <SayMyName/>
  // </>
  // CustomApp()
  domElement
)
