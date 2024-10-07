import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../data/logo/drofarmaptekanamyslow.webp'

export const Footer = () => {
  return (
    <footer
      className={'flex justify-center items-center mt-8 mb-8'}
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
