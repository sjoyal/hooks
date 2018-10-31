import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ReducerContext } from 'context/ReducerProvider'
import useSpecifiedContextDomain from 'hooks/useSpecifiedContextDomain'

export default function Summary(props) {
  const reducerContext = useSpecifiedContextDomain(ReducerContext, [
    'counter',
    'todos',
  ])
  console.log(reducerContext)

  return <div>Summary</div>
}

Summary.propTypes = {
  // add em
}
