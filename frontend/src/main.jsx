import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import AuthContext from './context/authContext.jsx';
import ListingContext from './context/ListingContext.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthContext>
      <ListingContext>
        <App />
      </ListingContext>
    </AuthContext>
  </BrowserRouter>
  
)
