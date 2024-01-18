import React from 'react'
// import { useInputStates } from '../../../hooks/useInputStates'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

export const InputFile = (props) => {
  const {
    label,
    name,
    id,
    value,
    onChange,
    error
  } = props

  const IDFile = 10

  const handleFileChange = (e) => {
    // Call the onChange prop with both the event and the input ID
    onChange(e, IDFile)
  }

  return (
    <div
      className={'form__field'}
    >
      <label
        htmlFor={'input'}
        className={'form__label'}
      >
        {label}
      </label>
      <input
        // id={Date.now()}
        // value={value}
        // className={'form__input'}
        // type={'file'}
        // name={name}
        // onChange={(e, id) => onChange(e, id)}
        id={IDFile}
        className={'form__input'}
        type={'file'}
        name={name}
        onChange={handleFileChange}
        // eslint-disable-next-line react/no-unknown-property
      />
      {error && error.length > 0 && <Error message={error} />}
      {/* {hasError && <ErrorText>{errors[name]}</ErrorText>} */}
    </div>
  )
}

InputFile.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default InputFile