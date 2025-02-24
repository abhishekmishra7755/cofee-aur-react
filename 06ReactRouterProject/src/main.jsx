import { StrictMode } from 'react'
import { createBrowserRouter, createRoutesFromElements, 
  Route, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import Home from './Home/Home.jsx'
import User from './User/User.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'
import Login from './Login/LoginPage.jsx'
import SignUp from './Sign in/SignUp.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element = {<Layout/>}>
    <Route path="" element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='contact' element = {<Contact/>}/>
    <Route path='user/:userId' element = {<User/>}/>
    <Route path='login' element = {<Login/>}/>
    <Route path='signup' element = {<SignUp/>}/>
    <Route
    loader = {githubInfoLoader} 
    path='github'
     element = {<Github/>}

     />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
