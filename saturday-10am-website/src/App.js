import React from 'react'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider/>
      <HomeContent/>
      <Footer/>
    </>
  )
}

export default App