import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/content'

function App() {
  const [count, setCount] = useState('')

  return ( <div>
    <Content></Content>
  </div>)
}

export default App
