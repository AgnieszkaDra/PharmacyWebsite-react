import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark)
export const ButtonClose = (props) => {
  const {
    open
  } = props

  return (
    <FontAwesomeIcon
      icon={faXmark}
      className={`${open ? 'nav__button close' : 'nav__button none '}`}
    />
  )
}

ButtonClose.propTypes = {
  className: PropTypes.string,
  open: PropTypes.string
}

export default ButtonClose
