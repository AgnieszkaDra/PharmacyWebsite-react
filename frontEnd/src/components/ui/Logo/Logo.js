import React from 'react'
import PropTypes from 'prop-types'

export const Logo = (props) => {
  const {
    className
  } = props

  return (
    <div
      className={className}
    >
      <img
        alt={'logo'}
        src={props.logo}
      >
      </img>
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string
}

export default Logo
