import createAction from './utils'

export const add = createAction('hooks/todo/add')
export const remove = createAction('hooks/todo/remove')
export const reset = createAction('hooks/todo/reset')

export const initialState = {
  tasks: [],
}

export function reducer(state, action) {
  let updatedState

  switch (action.type) {
    case [add]:
      updatedState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
      break
    case [remove]:
      updatedState = {
        ...state,
        tasks: state.tasks.filter(t => t !== action.payload),
      }
      break
    case [reset]:
      updatedState = {
        ...state,
        tasks: initialState.tasks,
      }
      break
    default:
      updatedState = state
      break
  }

  return updatedState
}

export default {
  initialState,
  reducer,
}
