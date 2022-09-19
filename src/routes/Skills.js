import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import SkillCards from '../components/SkillCards'


const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='SKILLS' text='Languages, Framesworks, DBs, ORMs and more' />
      <SkillCards />
      <Footer />
    </div>
  )
}

export default Skills