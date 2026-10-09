import React, { useState } from 'react'

const Login = ({ setisLogin }) => {
  const [password, setPassword] = useState("")
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
      <div className='w-fullmax-w-md bg-white p-8 rounded-xl shadow'>
        <h1 className='text-2xl font-bold text-center'>Admin Panel</h1>

        <p className='text-center text-gray-500 mt-2'>Admin panelga kirish</p>
        
        <input type="text" 
        placeholder='Admin kodi'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full border rounded-lg px-4 py-3 mt-6'
        />

        <button
        onClick={() => {
          if (password === "1234") {
            setisLogin("Kirish muvaffaqiyatli!")
          }
          else {
            alert("Noto`g`ri admin kodi!")
          }
        }}
        className='w-full bg-blue-600 text-white py-3 rounded-lg mt-4'>Kirish</button>
      </div>
    </div>
  )
}

export default Login
