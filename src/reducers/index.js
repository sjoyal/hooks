import counter from './counter'
import todos from './todos'

export const GlobalReducerConstants = {
  Counter: 'counter',
  Todos: 'todos',
}

export default {
  [GlobalReducerConstants.Counter]: counter,
  [GlobalReducerConstants.Todos]: todos,
}
