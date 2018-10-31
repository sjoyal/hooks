import React from 'react'
import PropTypes from 'prop-types'

export const ReducerContext = React.createContext({})

export default function ReducerProvider({ children, value }) {
  return (
    <ReducerContext.Provider value={value}>{children}</ReducerContext.Provider>
  )
}

ReducerProvider.propTypes = {
  children: PropTypes.any,
  value: PropTypes.object.isRequired,
}
