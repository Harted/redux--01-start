// action
export const action = (type, payload) => ({ type: type, payload: payload })

// async action
export const actionAsync = (asyncFunc, type, payload) => (dispatch, getState) => {
    asyncFunc((newType, newPayload) => {
        dispatch({
            type: newType || type,
            payload: { ...payload, ...newPayload }
        })
    }, getState)
}
