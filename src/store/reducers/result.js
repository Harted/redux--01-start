import { RESULT } from '../../store/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULT.STORE:
            if (!action.payload.count) console.error('payload.count');
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: action.payload.count
                })
            }
        case RESULT.DELETE:
            if (!action.payload.id) console.error('payload.id');
            return {
                ...state,
                results: state.results.filter(
                    obj => obj.id !== action.payload.id
                )
            }
        default:
            return state
    }
}

export default reducer;
