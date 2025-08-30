import React from 'react'
import Login from './pages/AuthPages/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/AuthPages/Signup'
import Home from './pages/Home'
import ListingPage1 from './pages/ListingPages/ListingPage1'
import ListingPage2 from './pages/ListingPages/ListingPage2'
import ListingPage3 from './pages/ListingPages/ListingPage3'
import ListingPage4 from './pages/ListingPages/ListingPage4'
import ViewCard from './pages/CardPages/ViewCard'
import EditCard from './pages/CardPages/EditCard'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/listingpage1" element={<ListingPage1 />} />
      <Route path="/listingpage2" element={<ListingPage2 />} />
      <Route path="/listingpage3" element={<ListingPage3 />} />
      <Route path="/listingpage4" element={<ListingPage4 />} />
      <Route path="/viewcard/:id" element={<ViewCard />} />
      <Route path="/editcard/:id" element={<EditCard />} />
   </Routes>
  )
}

export default App