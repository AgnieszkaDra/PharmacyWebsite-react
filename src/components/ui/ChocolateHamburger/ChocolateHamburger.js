import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ChocolateHamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const {
    span
  } = props

  const spanElement = (spanElement) => {
    const numberOfElements = spanElement
    const elements = []

    for (let i = 1; i <= numberOfElements; i++) {
      elements.push(
        <div
          key={i}
          className={'span-container'}
        >
          <span className={'span'}></span>
        </div>
      )
    }
    return (
      <>
        {elements}
      </>
    )
  }

  return (
    <div
      className={`hamburger__icon${isOpen ? '-close' : '-open'}`}
      onClick={toggleMenu}
    >
      {spanElement(span)}
    </div>
  )
}

ChocolateHamburger.propTypes = {
  isNavbarOpen: PropTypes.bool,
  span: PropTypes.number,
  openFunc: PropTypes.func
}

export default ChocolateHamburger
