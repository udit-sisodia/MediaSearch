import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-10 py-6 bg-(--c1) flex justify-between'>
            <Link to="/" className='font-semibold text-2xl'>MediaSearch</Link>
            <div className='flex gap-6'>
                <Link className='px-4 py-2 bg-(--c4) rounded text-black active:scale-95 cursor-pointer' to="/" >Search</Link>
                <Link className='px-4 py-2 bg-(--c4) rounded text-black active:scale-95 cursor-pointer' to="/collections">Collection</Link>
            </div>
        </div>
  )
}

export default Navbar
