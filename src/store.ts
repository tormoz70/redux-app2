import { configureStore } from "@reduxjs/toolkit"

type State = {
    counter: number;
}


export type IncrimentAction = {
    type: "incriment"
}

export type DecrimentAction = {
    type: "decriment"
}

type Action = IncrimentAction | DecrimentAction

const initialState: State = {
    counter: 0
} 

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case "incriment":
            return {
                ...state,
                counter: state.counter + 1
            }    
        case "decriment":
            return {
                ...state,
                counter: state.counter - 1
            }    
        default:
            return state
    }
}

export const store = configureStore({
    reducer: reducer
})
