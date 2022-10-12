import React from 'react'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import About from './components/About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='./About'>
          <About />
        </Route>
      </Routes>
      
      <ImageSlider/>
      <HomeContent/>
      <Footer/>
      </Router>
    </>
  )
}

export default App