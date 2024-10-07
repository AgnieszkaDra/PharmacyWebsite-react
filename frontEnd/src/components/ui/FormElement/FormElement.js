import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import axios from 'axios'

import PropTypes from 'prop-types'

export const FormElement = ({ children, className }) => {
  const [successMessage, setSuccessMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/', {
        ola: 'ggg'
      })
      setSuccessMessage('Formed is send successfully')
      console.log('Data saved:', response.data)
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }
  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
      <div className={'text-center'}>
        <Button
          type={'submit'}
          className={'button__submit font-bold'}
          text={'WYŚLIJ'}
        />
      </div>
      {successMessage && <p>{successMessage}</p>}
    </form>
  )
}

FormElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

export default FormElement
