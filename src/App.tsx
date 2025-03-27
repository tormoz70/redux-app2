import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppState, CounterId, DecrimentAction, IncrimentAction, store, useAppDispatch, useAppSelector } from './store'
import { useEffect, useReducer, useRef } from 'react'
import { useDispatch } from 'react-redux'

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
  const dispatch = useAppDispatch();
  const counterState = useAppSelector((state) => selectCounter(state, counterId));

  console.log("render counter: ", counterId);

  return (
    <>   
        <div>counter({ counterId }): {counterState?.counter}</div>
        <button onClick={() => dispatch({ type: "incriment", payload: { counterId } } satisfies IncrimentAction)}>
          incriment
        </button>
        <button onClick={() => dispatch({ type: "decriment", payload: { counterId } } satisfies DecrimentAction)}>
          decriment
        </button>

    </>
  );
}

export default App
