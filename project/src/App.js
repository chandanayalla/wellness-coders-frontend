import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import Home from './components/home/home';
import Home1 from './components/home/home1';
import About from './components/about/about';
import SignOut from './components/signout/signout';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import Contact from './components/contact/contact';
import CalorieCalculator from './components/calculator/CalorieCalculator';
import HydrationCalculator from './components/calculator/HydrationCalculator';
import MacronutrientCalculator from './components/calculator/MacronutrientCalculator';
import NutritionInfoPage from './components/Nutrition/NutritionInfoPage';
import HomePage from './components/addmeal/MealPlanningApp.js';
import ResultPage from './components/result/result.js';
import { Menu } from '@chakra-ui/react';
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
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/CalorieCalculator" element={<CalorieCalculator/>}/>
        <Route path="/HydrationCalculator" element={<HydrationCalculator/>}/>
        <Route path="/MacronutritionCalculator" element={<MacronutrientCalculator/>}/>
        <Route path="/nutrition" element={<NutritionInfoPage/>}/>
        <Route path="/about" element={<Menu/>}/>
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/addmeal" element={<HomePage/>}/>
        <Route path="/result" element={<ResultPage/>}/>


</Routes>
  </Router>
    
    
    </div>

    
    </>
  );
}

export default App;
