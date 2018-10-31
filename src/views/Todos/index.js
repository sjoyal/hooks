import React, { useContext, useState } from 'react'
import {
  buttonStyle,
  gutterStyle,
  headerStyle,
  inputStyle,
  listStyle,
  strippedButtonStyle,
} from 'constants/styles'
import { ReducerContext } from 'context/ReducerProvider'
import { GlobalReducerConstants } from 'reducers'
import { add, clear, complete } from 'reducers/todos'
import Task from './Task'

export default function Todos(props) {
  const [todo, setTodo] = useState('')
  const ctx = useContext(ReducerContext)

  const [state, dispatch] = ctx[GlobalReducerConstants.Todos] || []
  const submitTodo = () => {
    if (todo) {
      dispatch(add(todo))
      setTodo('')
    }
  }

  const hasTasks = state.tasks && !!state.tasks.length

  return (
    <>
      <h2 style={headerStyle}>To Do</h2>
      <section style={gutterStyle}>
        <input
          onChange={e => setTodo(e.target.value)}
          value={todo}
          style={inputStyle}
        />
        <button onClick={submitTodo} style={buttonStyle}>
          Add
        </button>
        <br />
        {hasTasks && (
          <ul style={listStyle}>
            {state.tasks.map((t, i) => (
              <Task
                {...t}
                key={i}
                complete={payload => dispatch(complete(payload))}
              />
            ))}
          </ul>
        )}
        {hasTasks && (
          <button onClick={() => dispatch(clear())} style={strippedButtonStyle}>
            Clear All
          </button>
        )}
      </section>
    </>
  )
}
