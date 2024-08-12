import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import Home from './components/home/home';
import Home1 from './components/home/home1';
import About from './components/about/about';
import SignOut from './components/signout/signout';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
//import Navbar from './'


function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        {/* <Route path="/about" element={<Menu/>}/> */}
        <Route path="/forgotpass" element={<ForgotPassword />} />


</Routes>
  </Router>
    
    
    </div>

    
    </>
  );
}

export default App;
