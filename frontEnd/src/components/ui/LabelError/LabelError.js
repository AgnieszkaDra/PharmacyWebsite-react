import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <div
      className={'label__error'}
    >
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string
}

export default Button
