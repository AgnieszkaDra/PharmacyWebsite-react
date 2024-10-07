import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../data/logo/drofarmaptekanamyslow.webp'

export const Footer = (props) => {
  const {
    className
  } = props

  return (
    <footer
      className={className}
    >
      <img
        src={logo}
        alt={'logo'}
      >
      </img>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
