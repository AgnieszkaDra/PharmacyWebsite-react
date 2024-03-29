import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMortarPestle } from '@fortawesome/free-solid-svg-icons'

export const SectionFourth = (props) => {
  const {
    className
  } = props

  return (

    <section
      className={className}
    >
      <div
        className={'section--fourth__element border--pink'}
      >
        <div>
          <FontAwesomeIcon icon={faClock} />
          <strong>Apteka otwarta</strong>
          <br></br>
          Od poniedziałku do soboty
          <br></br>
          w godzinach
          <br></br>
          od < span > 8:00 do 20:00</span >
        </div>
      </div>
      <div className={'section--fourth__element border--pink'}>
        <div>
          <FontAwesomeIcon icon={faMortarPestle} />
          <strong>
            Apteka
            <br></br>
            Non-Stop
            <br></br>
            Jelcz-Laskowice
          </strong>
          <br></br>
          ul. Józefa Bożka 9
          <br></br>
          55-220 Jelcz-Laskowice
          <br></br>
          tel. <span>89078990</span>
        </div>
      </div>
    </section>
  )
}

SectionFourth.propTypes = {
  className: PropTypes.string
}

export default SectionFourth
