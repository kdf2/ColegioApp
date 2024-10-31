import { useState } from 'react'
import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-custom-primary min-h-screen flex items-center justify-center'>
      <LoginForm/>
      </div>
    </>
  )
}

export default App
