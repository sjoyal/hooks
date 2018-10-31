import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import {
  bodyStyle,
  contentStyle,
  gutterStyle,
  linkStyle,
  navStyle,
  navHeaderStyle,
} from 'constants/styles'
import ReducerProvider from 'context/ReducerProvider'
import useReduxLikeReducer from 'hooks/useReduxLikeReducer'
import reducers from 'reducers'

export default function Wrapper({ children }) {
  const aggReducer = useReduxLikeReducer(reducers)

  return (
    <ReducerProvider value={aggReducer}>
      <div style={bodyStyle}>
        <section style={navStyle}>
          <h2 style={navHeaderStyle}>Hooks!</h2>
          <ul style={gutterStyle}>
            <li style={linkStyle}>
              <Link to="counter">Counter</Link>
            </li>
            <li style={linkStyle}>
              <Link to="todos">Todos</Link>
            </li>
          </ul>
          <hr />
          <Link to="/" style={gutterStyle}>
            Back to Summary
          </Link>
        </section>
        <section style={contentStyle}>{children}</section>
      </div>
    </ReducerProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.any,
}
