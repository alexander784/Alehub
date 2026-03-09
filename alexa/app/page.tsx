import React from 'react'
import Experience from './components/Experience'
import Home from './components/Home'
import Projects from './Projects'
import Articles from './Articles'

const page = () => {
  return (
    <div className='bg-stone-800'>
      <Home />
      <Experience />
      <Projects />
      <Articles />
      
    </div>
  )
}

export default page