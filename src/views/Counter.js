import React, { useContext } from 'react'
import {
  buttonStyle,
  gutterStyle,
  headerStyle,
  strippedButtonStyle,
} from 'constants/styles'
import { ReducerContext } from 'context/ReducerProvider'
import { GlobalReducerConstants } from 'reducers'
import { decrement, increment, reset } from 'reducers/counter'

export default function Counter() {
  const ctx = useContext(ReducerContext)
  const [state, dispatch] = ctx[GlobalReducerConstants.Counter] || []

  return (
    <>
      <h2 style={headerStyle}>Counter</h2>
      <section style={gutterStyle}>
        <p>
          <strong>{state.value}</strong>
        </p>
        <br />
        <button onClick={() => dispatch(increment())} style={buttonStyle}>
          +
        </button>
        <button onClick={() => dispatch(decrement())} style={buttonStyle}>
          -
        </button>
        <button onClick={() => dispatch(reset())} style={strippedButtonStyle}>
          Reset
        </button>
      </section>
    </>
  )
}
