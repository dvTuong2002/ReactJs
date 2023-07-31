import React from 'react'
import './App.css'
import DemoUseState from './components/DemoUseState'
import DemoUseStateObject from './components/DemoUseStateObject'
import DemoTask from './components/DemoTask'
import DemoUseEffect from './components/DemoUseEffect'
import ExampleContext from './components/ExampleContext'
import DemoReducer from './components/DemoReducer'
import DemoUseMemo from './components/DemoUseMemo'

export default function App() {
  return (
    <div className='container border border-primary my-5'>
        <h1 className='text-center'>Hook Demo</h1>
        <hr/>
        {/* <DemoUseState />
        <DemoUseStateObject />
        <DemoTask />
        <hr/>
        <DemoUseEffect /> */}

        <ExampleContext />
        <DemoReducer />
        <DemoUseMemo />
    </div>
  )
}