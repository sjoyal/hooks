import { useMemo, useReducer } from 'react'
import { GlobalReducerConstants } from 'reducers'

export default function useReduxLikeReducer(reducers) {
  const {
    [GlobalReducerConstants.Counter]: counter,
    [GlobalReducerConstants.Todos]: todos,
  } = reducers

  const counterReducer = useReducer(counter.reducer, counter.initialState)
  const todosReducer = useReducer(todos.reducer, todos.initialState)

  const aggReducerMemo = useMemo(
    () => ({
      [GlobalReducerConstants.Counter]: counterReducer,
      [GlobalReducerConstants.Todos]: todosReducer,
    }),
    [...counterReducer, ...todosReducer],
  )

  return aggReducerMemo
}
