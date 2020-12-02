import { RESULT } from '../actions/actionTypes';
import { updateObject } from '../utils'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULT.STORE:
            return updateObject(state, storeResult(state, action))
        case RESULT.DELETE:
            return updateObject(state, deleteResult(state, action))
        default:
            return state
    }
}

const storeResult = (state, action) => ({
    results: state.results.concat({
        id: Date.now(),
        value: action.payload.count
    })
})

const deleteResult = (state, action) => ({
    results: state.results.filter(
        obj => obj.id !== action.payload.id
    )
})

export default reducer;
