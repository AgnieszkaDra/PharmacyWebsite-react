import React, { useRef } from 'react'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

export const Input = (props) => {
  const {
    label,
    name,
    id,
    value,
    onChange,
    error
  } = props

  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div
      onClick={handleClick}
      className={'form__field'}
    >
      <label
        htmlFor={'input'}
        className={'form__label'}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        value={value}
        className={'form__input'}
        type={'input'}
        name={name}
        onChange={onChange}
      />
      {error && error.length > 0 && <Error message={error} />}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default Input
