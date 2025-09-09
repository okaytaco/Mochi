import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen text-black bg-[#d4dccd]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App