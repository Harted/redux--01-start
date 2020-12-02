import { COUNTER } from '../actions/actionTypes'

const counterValue = 0 // initial state

const reducer = (state = counterValue, action) => {

    switch (action.type) {
        case COUNTER:
            return state + action.payload.value
        default:
            return state
    }

}

export default reducer;
