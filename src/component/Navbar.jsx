import React from 'react'

import {Link} from 'react-router-dom'


import logo from './pngtree-movie-board-icon-png-image_4751062.jpg'

const Navbar = () => {
  return (
    <div className='flex space-x-10 border items-center pl-3 py-4'>

        <Link to="/"><img  className='w-[60px] '  src={logo}  /></Link>

        <Link to="/" className='text-3xl text-blue-500 font-bold' >Movies</Link>
        <Link to="/Watchlist" className='text-3xl text-blue-500 font-bold' >Watch List</Link>


    </div>
  )
}

export default Navbar
