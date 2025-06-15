import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Test Blob Website</h1>
        <Spline scene="https://prod.spline.design/qiZTVlaI3hGT-hXj/scene.splinecode" />
      </div>
    </>
  )
}

export default App
