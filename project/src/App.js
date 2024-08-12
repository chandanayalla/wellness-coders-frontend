import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import Home from './components/home/home';
import About from './components/about/about';
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
        <Route path="/about" element={<About/>}/>


</Routes>
  </Router>
      
      
    
    {/* <Personal />
    <Education />
    <Knownlang/>
    <UseStateFunction /> */}
    
    
    </div>

    
    </>
  );
}

export default App;
