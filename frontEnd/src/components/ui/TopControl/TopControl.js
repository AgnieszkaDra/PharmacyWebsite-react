import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useScroll } from '../../../hooks/useScroll'

const TopControl = () => {
  const { isScrolled, scrollToTop } = useScroll()

  return (
    <div
      className={`topcontrol ${isScrolled ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <div className={'topcontrol__container'}>
        <div className={'topcontrol__icon'}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
    </div>
  )
}

export default TopControl
