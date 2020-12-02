import { COUNTER } from '../../store/actions';

const counterValue = 0 // initial state

const reducer = (state = counterValue, action) => {

    switch (action.type) {
        case COUNTER:
            if (!action.payload.value) console.error('payload.value');
            return state + action.payload.value
        default:
            return state
    }

}

export default reducer;
