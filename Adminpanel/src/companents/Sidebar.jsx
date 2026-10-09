import React from 'react'

const Sidebar = ({ menuItems }) => {
  return (
    <aside className='w-64 h-screen bg-gray-800 text-white p-4'>
        <h1 className='text-2xl font-bold mb-4'>
            Admin Panel
        </h1>
        <nav>
            {menuItems.map((item) => (
                <a
                    key={item.id}
                    href={item.path}
                    className='block py-4 px-4 rounded hover:bg-slate-700'
                >
                    {item.name}
                </a>
            ))}
        </nav>
    </aside>
  )
}

export default Sidebar
