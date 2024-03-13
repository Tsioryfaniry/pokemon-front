import { useState } from 'react'
import './App.css'
import Heading from './components/heading/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading component='h2' variant='h1'>Hello</Heading>
    </>
  )
}

export default App
