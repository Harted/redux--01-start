import { updateObject } from '../utils'

// action
export const action = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

// async action
export const actionAsync = (asyncFunc, type, payload) => {
    return (dispatch, getState) => {
        asyncFunc(
            // callback
            (newType, newPayload) => {
                type = newType || type
                payload = updateObject(payload, newPayload)
                dispatch(action(type, payload))
            }, getState
            // callback
        )
    }
}

// /* asyncFunc example */
// dispatch => {
//     setTimeout(() => {
//         dispatch()
//     }, 2000)
// }