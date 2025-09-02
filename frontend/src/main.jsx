import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
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
