import React from 'react'
import './tech.css'
import theme from '../assets/theme_pattern.svg'

const tech = () => {
  return (
    <div id='tech' className='tech'>
        <div className="tech-title">
      <h1>Technologies</h1>
      <img src={theme} alt="" />
      </div>
    </div>
  )
}

export default tech
