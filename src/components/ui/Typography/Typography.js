import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

export const Typography = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  const variantClass = classes[variant]

  if (variant === 'h1') {
    return (
      <h1
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </h1>
    )
  } else if (variant === 'h2') {
    return (
      <h2
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </h2>
    )
  } else if (variant === 'h3') {
    return (
      <h3
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </h3>
    )
  } else if (variant === 'h4') {
    return (
      <h4
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </h4>
    )
  } else if (variant === 'h5') {
    return (
      <h4
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </h4>
    )
  } else if (variant === 'p') {
    return (
      <p
        className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </p>
    )
  } else if (variant === 'strong') {
    return (
      <strong
        className={`${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
        {...otherProps}
      >
        {children}
      </strong>
    )
  }
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'button', 'strong'])
}

export default Typography
