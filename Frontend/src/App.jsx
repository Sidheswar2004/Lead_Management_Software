import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar'
import Signup from './pages/signup/signup'
import SignIn from './pages/signin/signin'
import Homepage from './pages/homepage/homepage'
import AddNew from './pages/addlead/addNew'
import New from './pages/new/new'
import DashBoard from './pages/home/Home';
import FollowUp from './pages/followup/followUp';
import Important from './pages/important/important';
import ProfileCard from './pages/profilecard/profileCard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/logout" element={<Navbar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<DashBoard />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/new" element={<New />} />
          <Route path="/followup" element={<FollowUp />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </Router> 
      
      {/* <ProfileCard/> */}
    </>
  )
}

export default App
