import React, { useState } from 'react'
import { Button, Input } from '../../../../ui'
import { validateForm } from '../../../../../components/features/Forms/Validate/Validate'

import PropTypes from 'prop-types'

const ElectronicData = (props) => {
  const { data, onChange, result } = props

  const [validationErrors, setValidationErrors] = useState({
    PIN: '',
    PESEL: ''
  }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidationErrors({
      PIN: '',
      PESEL: ''
    })
    const errors = validateForm(data)
    errors.PIN.length > 0 || errors.PESEL.length > 0
      ?
      setValidationErrors(errors)
      :
      result(data)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={'form'}
      >
        <Input
          label={'PIN'}
          name={'PIN'}
          id={'PIN'}
          value= {data.PIN}
          onChange={onChange}
          error={validationErrors.PIN}
        >
        </Input>
        <Input
          label={'PESEL'}
          name={'PESEL'}
          id={'PESEL'}
          value={data.PESEL}
          onChange={onChange}
          error={validationErrors.PESEL}
        >
        </Input>
        <Button
          type={'submit'}
          className={'button__submit'}
        >
          <p>Dodaj kolejną receptę elektroniczną</p>
        </Button>
      </form>
    </>
  )
}

ElectronicData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default ElectronicData
