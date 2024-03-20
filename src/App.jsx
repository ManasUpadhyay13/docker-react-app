import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>It works on my machine</h1>
      <p>Now it works on your machine also 😉</p>
    </div>
  )
}

export default App
