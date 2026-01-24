import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full bg-(--c1)">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex flex-wrap items-center justify-between gap-3">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-semibold text-lg sm:text-2xl whitespace-nowrap"
        >
          MediaSearch
        </Link>

        {/* Nav Buttons */}
        <div className="flex gap-3 sm:gap-6 flex-wrap">
          <Link
            to="/"
            className="px-3 sm:px-4 py-2 bg-(--c4) rounded text-black text-sm sm:text-base active:scale-95"
          >
            Search
          </Link>

          <Link
            to="/collections"
            className="px-3 sm:px-4 py-2 bg-(--c4) rounded text-black text-sm sm:text-base active:scale-95"
          >
            Collection
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
