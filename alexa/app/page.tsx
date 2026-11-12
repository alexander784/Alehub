import React from 'react'
import Experience from './components/Experience'
import Home from './components/Home'
import Projects from './components/Projects'
import Articles from './components/Articles'
// import Footer from './components/Footer'
const page = () => {
  return (
    <div className='bg-white'>
      <Home />
      <Experience />
      <Projects />
      <Articles />
      {/* <Footer /> */}
      
    </div>
  )
}

export default page