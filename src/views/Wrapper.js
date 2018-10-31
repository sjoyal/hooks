import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import ReducerProvider from 'context/ReducerProvider'
import useReduxLikeReducer from 'hooks/useReduxLikeReducer'
import reducers from 'reducers'

export default function Wrapper({ children }) {
  const aggReducer = useReduxLikeReducer(reducers)

  return (
    <ReducerProvider value={aggReducer}>
      <section>
        <h2>Hooks!</h2>
        <ul>
          <li>
            <Link to="counter">Counter</Link>
          </li>
          <li>
            <Link to="todos">Todos</Link>
          </li>
        </ul>
      </section>
      <section>{children}</section>
    </ReducerProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.any,
}
