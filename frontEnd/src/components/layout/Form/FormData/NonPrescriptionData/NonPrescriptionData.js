import React from 'react'
import Input from '../../../../ui/Input'
import Button from '../../../../ui/Button'
import { useValidationErrors } from '../../../../../hooks/useValidationErrors'
import PropTypes from 'prop-types'

export const NonPrescriptionData = (props) => {
  const { data, onChange, result } = props
  const { validationErrors } = useValidationErrors()

  const handleSubmit = (e) => {
    e.preventDefault()
    result(data)
  }
  return (
    <form
      className={'form'}
      onSubmit={handleSubmit}
    >
      <Input
        label={'Nazwa leku'}
        name={'drugName'}
        id={'drugName'}
        value= {data.drugName}
        onChange={(e) => onChange(e)}
        error={validationErrors.drugName}
      >
      </Input>
      <Input
        label={'Dawka'}
        name={'drugDose'}
        id={'drugDose'}
        value= {data.drugDose}
        onChange={(e) => onChange(e)}
        error={validationErrors.drugDose}
      >
      </Input>
      <Input
        label={'Ilość'}
        name={'drugAmount'}
        id={'drugAmount'}
        value= {data.drugAmount}
        onChange={(e) => onChange(e)}
        error={validationErrors.drugAmount}
      >
      </Input>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Dodaj kolejny lek'}
      >
      </Button>
    </form>
  )
}

NonPrescriptionData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func,
  result: PropTypes.func
}

export default NonPrescriptionData
