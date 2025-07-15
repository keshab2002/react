import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './root.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import {Github,  GithubLoad} from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Root/>} >
      <Route path='' element= {<Home/>} />
      <Route path='about' element= {<About/>} />
      <Route path='contact' element= {<Contact/>} />
      <Route path='user/:userid' element = {<User/>} />
      <Route path='github' 
      element = {<Github/>} 
      loader ={ GithubLoad}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider  router={router}/>
  </StrictMode>,
)
