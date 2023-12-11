import { useState } from 'react'
import './App.css'
import DataComponent from './components/dataComponent'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
    <DataComponent/>
    </>
  )
}

export default App
