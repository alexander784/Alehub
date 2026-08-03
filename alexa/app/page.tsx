import React from 'react'
import Experience from './components/Experience'
import Home from './components/Home'
import Projects from './Projects'
import Articles from './components/Articles'

const page = () => {
  return (
    <div className='bg-white'>
      <Home />
      <Experience />
      <Projects />
      <Articles />
      
    </div>
  )
}

export default page