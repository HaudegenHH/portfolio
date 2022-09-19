import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'

import SpaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop id="video">
        <source src={SpaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Vision. Design. Mastery.</h1>
        <p>Digital Creative & Fullstack Developer</p>      
        <div>
          <Link to="/skills" className="btn">Skills</Link>
          <Link to="/projects" className="btn btn-light">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Video