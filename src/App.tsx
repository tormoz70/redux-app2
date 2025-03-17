import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppState, CounterId, DecrimentAction, IncrimentAction, store } from './store'
import { useEffect, useReducer, useRef } from 'react'

function App() {


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
        <Counter counterId='first'/>
        <Counter counterId='second'/>
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

const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId]

export function Counter({counterId}: { counterId: CounterId }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)
  console.log("render counter: ", counterId)

  const lastStateRef = useRef<ReturnType<typeof selectCounter>>(undefined)

  useEffect(() => {
    const unsubsribe = store.subscribe(() => {
      const currentState = selectCounter(store.getState(), counterId)
      const lastState = lastStateRef.current
      if(currentState !== lastState){
        forceUpdate()
      }
      lastStateRef.current = currentState
    })
    return unsubsribe
  })

  const counterState = selectCounter(store.getState(), counterId)

  return (
    <>   
        <div>counter({ counterId }): {counterState?.counter}</div>
        <button onClick={() => store.dispatch({ type: "incriment", payload: { counterId } } satisfies IncrimentAction)}>
          incriment
        </button>
        <button onClick={() => store.dispatch({ type: "decriment", payload: { counterId } } satisfies DecrimentAction)}>
          decriment
        </button>

    </>
  );
}

export default App
