import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

import { action, actionAsync } from '../../store/actions/actions'
import { COUNTER, RESULT } from '../../store/actions/actionTypes'

const Counter = props => {
    const count = props.count
    const results = props.results

    const disp = props.dispatch
    const dispAsync = props.dispatchAsync

    const resultFromFirebase = dispatch => {
        axios.get('https://burgerbuilder-a5135.firebaseio.com/result.json')
            .then(response => {
                dispatch(RESULT.STORE, { count: response.data })
            })
            .catch(() => {
                dispatch() // dispatch original count payload on error
            })
    }

    const asyncFunc = (dispatch, getState) => {
        const oldCounter = getState().counter
        console.log(oldCounter);
        setTimeout(() => {
            dispatch()
        }, 2000);
    }

    return (
        <div>
            <CounterOutput value={count} />
            <CounterControl label="Increment" clicked={() => disp(COUNTER, { value: 1 })} />
            <CounterControl label="Decrement" clicked={() => disp(COUNTER, { value: -1 })} />
            <CounterControl label="Add 5" clicked={() => disp(COUNTER, { value: 5 })} />
            <CounterControl label="Subtract 5" clicked={() => disp(COUNTER, { value: -5 })} />
            <hr />
            <button onClick={() => disp(
                RESULT.STORE,
                { count: count }
            )}>Store Result</button>
            <button onClick={() => dispAsync(
                asyncFunc,
                RESULT.STORE,
                { count: count }
            )}>Timeout Result</button>
            <button onClick={() => dispAsync(
                resultFromFirebase,
                RESULT.STORE,
                { count: count }
            )}>Firebase Result</button>
            <ul>
                {results.map(result => (
                    <li
                        key={result.id}
                        onClick={() => disp(RESULT.DELETE, { id: result.id })}
                    >{result.value}</li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: state.counter,
        results: state.result.results,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: (type, payload) =>
            dispatch(action(type, payload)),
        dispatchAsync: (type, payload, asyncFunc) =>
            dispatch(actionAsync(type, payload, asyncFunc))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);