import createAction from './utils/createAction'

export const decrement = createAction('hooks/counter/decrement')
export const increment = createAction('hooks/counter/increment')
export const reset = createAction('hooks/counter/reset')

const initialState = {
  value: 0,
}

function reducer(state, action) {
  let updatedState

  switch (action.type) {
    case decrement.toCase():
      updatedState = {
        ...state,
        value: state.value - 1,
      }
      break
    case increment.toCase():
      updatedState = {
        ...state,
        value: state.value + 1,
      }
      break
    case reset.toCase():
      updatedState = {
        ...state,
        value: initialState.value,
      }
      break
    default:
      updatedState = initialState
      break
  }

  return updatedState
}

export default {
  initialState,
  reducer,
}
