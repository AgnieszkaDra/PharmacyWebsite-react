import React from 'react'
import { TopControl, Logo, Navigation } from '../../ui'
import logo from '../../../images/drofarmaptekanamyslow.webp'

import PropTypes from 'prop-types'

const Header = (props) => {
  const {
    className
  } = props
  const logoImage = logo

  return (
    <header
      className={`${className} flex justify-between items-center`}
    >
      <Logo
        className={'header__logo'}
        logo={logoImage}
      >
      </Logo>
      <div
        className={'header__navigation flex justify-end'}
      >
        <Navigation></Navigation>
      </div>
      <TopControl></TopControl>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
