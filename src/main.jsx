import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './components/contact.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Layout from './components/layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="contact" element={<Contact />} />
            </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
