import React from 'react'
import Sidebar from '../companents/Sidebar'
import Header from '../companents/Header'
import StatCard from '../companents/StatCard'

const Dashboard = () => {
    const menuItems = [
        {
            id: 1,
            name: "Dashboard",
            path: "/"
        },
        {
            id: 2,
            name: "Students",
            path: "/students"
        },
        {
            id: 3,
            name: "Courses",
            path: "/curses"
        },
        {
            id: 4,
            name: "Settings",
            path: "/settings"
        }
    ]
  
  return (
    <div className='flex'>
        <Sidebar menuItems={menuItems} />
        <main className='flex-1 p-6'>
            <Header adminName={"Amirtoy"} />    
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                <StatCard title="Student" value="800" />
                <StatCard title="Courses" value="8" />
                <StatCard title="Teachers" value="18" />
            </div>
        </main>
    </div>
  )
}

export default Dashboard
