import React, { useContext, useState } from 'react'
import { buttonStyle, gutterStyle, headerStyle } from 'constants/styles'
import { ReducerContext } from 'context/ReducerProvider'
import useSpecifiedContextDomain from 'hooks/useSpecifiedContextDomain'
import { GlobalReducerConstants } from 'reducers'

export default function Summary() {
  const [showDetails, setShowDetails] = useState(false)
  const {
    [GlobalReducerConstants.Counter]: counter,
    [GlobalReducerConstants.Todos]: todos,
  } = useSpecifiedContextDomain(ReducerContext, [
    GlobalReducerConstants.Counter,
    GlobalReducerConstants.Todos,
  ])

  const [counterState] = counter
  const [todosState] = todos
  const hasTasks = todosState.tasks && !!todosState.tasks.find(t => t.completed)

  return (
    <>
      <h2 style={headerStyle}>Summary</h2>
      <section style={gutterStyle}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={buttonStyle}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <br />
        <br />
        {showDetails && (
          <>
            <p>
              <strong>Count:&nbsp;</strong>
              {counterState.value}
            </p>
            <p>
              <strong>Completed Todos:&nbsp;</strong>
              {!hasTasks && 'No completed tasks yet!'}
            </p>
            {hasTasks && (
              <ol>
                {todosState.tasks.filter(t => t.completed).map((t, i) => (
                  <li key={i}>{t.text}</li>
                ))}
              </ol>
            )}
          </>
        )}
      </section>
    </>
  )
}
