import React from 'react';  
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SignUpPage from './pages/sign';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from './components/navbar';
import Blog from './pages/blog';
import Shop from './pages/shop';


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/sign" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

