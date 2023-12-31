import React from 'react'

import backgroundImage from '../../../images/leki.webp'
import PropTypes from 'prop-types'

export const SectionFirst = (props) => {
  const {
    className
  } = props

  const style = {
    backgroundImage: `url(${backgroundImage})`
  }

  return (
    <section className={className}>
      <div
        className={'section--first__element order border--pink'}
      >
        <h2 className={'headline--h2'}>Złóż rezerwację na leki i odbierz je w aptece
        </h2>
        <h3 className={'headline--h3'}>W celu złożenia rezerwacji wypełnij formularz
        </h3>
        <button className={'button'}>
          <a
            className={'link'}
            href={'./form.html'}
            id={'myHref'}
          >
            Złóż zamówienie
          </a>
        </button>
      </div>
      <div
        className={'section--first__element hero border--pink'}
        style={style}
      >
      </div>
    </section>
  )
}

SectionFirst.propTypes = {
  className: PropTypes.string
}

export default SectionFirst
