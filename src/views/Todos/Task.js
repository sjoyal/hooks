import React from 'react'
import PropTypes from 'prop-types'
import { checkboxStyle, ellipsisStyle, listItemStyle } from 'constants/styles'

export default function Task({ complete, completed, text }) {
  return (
    <li style={listItemStyle}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => complete({ text, completed: !completed })}
        style={checkboxStyle}
      />
      <div style={ellipsisStyle}>{text}</div>
    </li>
  )
}

Task.propTypes = {
  complete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}
