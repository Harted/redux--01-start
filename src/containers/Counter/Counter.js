import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { COUNTER, RESULT } from '../../store/actions';

const Counter = props => {
    const count = props.count
    const results = props.results

    const disp = props.dispatch

    return (
        <div>
            <CounterOutput value={count} />
            <CounterControl label="Increment" clicked={() => disp(COUNTER, { value: 1 })} />
            <CounterControl label="Decrement" clicked={() => disp(COUNTER, { value: -1 })} />
            <CounterControl label="Add 5" clicked={() => disp(COUNTER, { value: 5 })} />
            <CounterControl label="Subtract 5" clicked={() => disp(COUNTER, { value: -5 })} />
            <hr />
            <button onClick={() => disp(RESULT.STORE, { count: count })}>Store Result</button>
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
        dispatch: (type, payload) => dispatch(
            { type: type, payload: payload }
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);