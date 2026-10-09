import React from 'react'

const Header = ({ adminName }) => {
  return (
    <header className='h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
        <h2 className='text-xl font-semibold'>
            Dashboard
        </h2>
        <div>
            Admin {adminName}
        </div>
    </header>
  )
}

export default Header
