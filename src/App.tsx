import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DecrimentAction, IncrimentAction, store } from './store'
import { useEffect, useReducer } from 'react'

function App() {

  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    const unsubsribe = store.subscribe(() => {
      forceUpdate()
    })
    return unsubsribe
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>counter: {store.getState().counter}</div>
        <button onClick={() => store.dispatch({ type: "incriment" } satisfies IncrimentAction)}>
          incriment
        </button>
        <button onClick={() => store.dispatch({ type: "decriment" } satisfies DecrimentAction)}>
          decriment
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
