import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { authDataContext } from './context/authContext'

import Home from './pages/Home'
import Login from './pages/AuthPages/Login'
import Signup from './pages/AuthPages/Signup'

import ListingPage1 from './pages/ListingPages/ListingPage1'
import ListingPage2 from './pages/ListingPages/ListingPage2'
import ListingPage3 from './pages/ListingPages/ListingPage3'
import ListingPage4 from './pages/ListingPages/ListingPage4'

import ViewCard from './pages/CardPages/ViewCard'
import EditCardPage1 from './pages/CardPages/EditCardPage1'
import EditCardPage2 from './pages/CardPages/EditCardPage2'
import EditCardPage3 from './pages/CardPages/EditCardPage3'
import EditCardPage4 from './pages/CardPages/EditCardPage4'
import MyListingPage from './pages/ListingPages/MyListingPage'
import EditViewCard from './pages/CardPages/EditViewCard'
import PaymentPage from './pages/Payment/PaymentPage'

import ScrollToTop from './helpers/ScrollToTop'

const App = () => {

  const { currentUser } = useContext(authDataContext);

  return (

    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/listingpage1" element={<ListingPage1 />} />
        <Route path="/listingpage2" element={<ListingPage2 />} />
        <Route path="/listingpage3" element={<ListingPage3 />} />
        <Route path="/listingpage4" element={<ListingPage4 />} />
        <Route path="/mylistingpage/:id" element={<MyListingPage />} />

        <Route path="/viewcard/:id" element={<ViewCard />} />
        <Route path="/editcardpage1/:id" element={<EditCardPage1 />} />
        <Route path="/editcardpage2/:id" element={<EditCardPage2 />} />
        <Route path="/editcardpage3/:id" element={<EditCardPage3 />} />
        <Route path="/editcardpage4/:id" element={<EditCardPage4 />} />
        <Route path="/editviewcard/:id" element={<EditViewCard />} />

        <Route path="/paymentpage/:id" element={<PaymentPage />} />
      </Routes>
    </>


  )
}

export default App