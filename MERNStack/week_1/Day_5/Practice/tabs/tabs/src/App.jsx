import { useState } from 'react'
import Tabs from './components/tabs'
import './App.css'

function App() {
  const tabs=["make you plan ","work on the plan","sleep","repeat...."]

  return (
    <>
        <Tabs tabs={tabs}></Tabs>
    </>
  )
}

export default App
