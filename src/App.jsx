import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import About from './Components/about'
import Services from './Components/services'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Tech from './Components/tech'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tech />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
