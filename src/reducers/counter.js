import createAction from './utils'

export const increment = createAction('hooks/counter/increment')
export const decrement = createAction('hooks/counter/decrement')
export const reset = createAction('hooks/counter/reset')

export const initialState = {
  value: 0,
}

export function reducer(state, action) {
  let updatedState

  switch (action.type) {
    case [increment]:
      updatedState = { ...state, value: state.value + 1 }
      break
    case [decrement]:
      updatedState = {
        ...state,
        value: state.value + 1,
      }
      break
    case [reset]:
      updatedState = {
        ...state,
        value: initialState.value,
      }
      break
    default:
      updatedState = initialState
      break
  }
}

export default {
  initialState,
  reducer,
}
