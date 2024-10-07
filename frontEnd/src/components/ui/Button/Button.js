import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    type,
    className,
    text,
    onClick
  } = props

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
