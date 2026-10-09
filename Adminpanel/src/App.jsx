import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  const [isLogin, setisLogin] = useState(false)

  return (
    <>

      {isLogin ? (<Dashboard />) : <Login setisLogin={setisLogin} />
        
      }
    </>
  )
}

export default App
