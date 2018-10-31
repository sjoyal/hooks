import createAction from './utils/createAction'

export const add = createAction('hooks/todo/add')
export const clear = createAction('hooks/todo/clear')
export const complete = createAction('hooks/todo/complete')

const initialState = {
  tasks: [],
}

function reducer(state, action) {
  let updatedState

  switch (action.type) {
    case add.toCase():
      updatedState = {
        ...state,
        tasks: [...state.tasks, { text: action.payload, completed: false }],
      }
      break
    case clear.toCase():
      updatedState = {
        ...state,
        tasks: initialState.tasks,
      }
      break
    case complete.toCase():
      updatedState = {
        ...state,
        tasks: state.tasks.map(
          t =>
            t.text === action.payload.text
              ? { ...t, completed: action.payload.completed }
              : t,
        ),
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
