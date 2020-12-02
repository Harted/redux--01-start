const redux = require('redux') // import {} from ...
const createStore = redux.createStore

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => { // '= initialState' ES6 default value
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        const newObj = {
            ...state,
            counter: state.counter + action.value
        }
        return newObj
    }

    return state
}

// Store
const store = createStore(rootReducer);

// Subcription
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })


