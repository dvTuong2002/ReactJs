import React from 'react'
import './App.css'
import DemoUseState from './components/DemoUseState'
import DemoUseStateObject from './components/DemoUseStateObject'
import DemoTask from './components/DemoTask'
import DemoUseEffect from './components/DemoUseEffect'

export default function App() {
  return (
    <div className='container border-primary my-5'>
      <h1 className='text-center'>Hook demo</h1>
      <hr/>
      <DemoUseState />
      <DemoUseStateObject />

      <DemoTask />
      <hr/>
      <DemoUseEffect />
    </div>
  )
}
