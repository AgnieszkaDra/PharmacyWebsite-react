import React from 'react'
import Typography from '../../ui/Typography/Typography'
import PropTypes from 'prop-types'

export const Section = (props) => {
  const {
    className,
    title,
    background,
    children
  } = props

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <section
      className={`${className} section`}
      style={style}
    >
      {title && (
        <Typography
          variant={'h4'}
          className={'uppercase mb-8 order__title'}
          style={{ fontWeight: 800 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.any
}

export default Section
