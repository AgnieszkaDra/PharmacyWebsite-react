import React from 'react'
import Input from '../../../../ui/Input'
import PropTypes from 'prop-types'

export const PatientData = (props) => {
  const { data, onChange } = props
  return (
    <>
      <Input
        label={'IMIĘ I NAZWISKO'}
        name={'name'}
        id={'name'}
        value={data.name}
        onChange={(e) => onChange(e)}
      >
      </Input>
      <Input
        label={'EMAIL'}
        name={'email'}
        id={'email'}
        value={data.email}
        onChange={(e) => onChange(e)}
      >
      </Input>
    </>
  )
}

PatientData.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  data: PropTypes.object,
  onChange: PropTypes.func
}

export default PatientData
