import React from 'react'
import BlogHeader from '../component/BlogHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
const Layout = () => {
  return (
    <div className=''>
      <div>
        <BlogHeader />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
