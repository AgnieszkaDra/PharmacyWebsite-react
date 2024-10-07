import React from 'react'
import PropTypes from 'prop-types'

const Error = (props) => {
  const { message, onClick } = props

  return (
    <p
      onClick={onClick ? () => onClick() : () => null}
      className={'form__error'}
    >
      {message}
    </p>
  )
}

Error.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
}

export default Error
