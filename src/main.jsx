import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Landing/Home.jsx'
import About from '../src/pages/About.jsx'
import Services from '../src/pages/Services.jsx'
import Contact from '../src/pages/Contact.jsx'
import Testimonials from './pages/Testimonials.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='testimonials' element={<Testimonials/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </StrictMode>,
)
