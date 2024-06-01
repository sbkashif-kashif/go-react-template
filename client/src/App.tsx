import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LogoAnimation from './Animate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col">
        <LogoAnimation />
        <br /> <br /> <br />
      <h1>Shaik's Go + React App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <p className='text-1xl font-bold underline'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      </div>
    </>
  )
}

export default App
