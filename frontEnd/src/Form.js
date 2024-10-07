import React from 'react'
import Section from './components/layout/Section'
import { Link } from 'react-router-dom'
import Button from './components/ui/Button'
import PatientData from './components/layout/Form/FormData/PatientData'
import ElectronicData from './components/layout/Form/FormData/ElectronicData'
import NonPrescriptionData from './components/layout/Form/FormData/NonPrescriptionData'
// import FormElement from './components/ui/FormElement/FormElement'
import PatientDataOrder from './components/layout/Form/FormOrder/PatientDataOrder'
import ElectronicOrder from './components/layout/Form/FormOrder/ElectronicOrder'
import PaperOrder from './components/layout/Form/FormOrder/PaperOrder'
import NonPrescriptionOrder from './components/layout/Form/FormOrder/NonPrescrptionOrder'
import PaperPrescriptionData from './components/layout/Form/FormData/PaperPrescriptionData'
import { useInputsValue } from './hooks/useInputsValue'
import { useInputFiles } from './hooks/useInputFileValue'
import { useShowElectronicPrescriptions } from './hooks/useShowElectronicPrescriptions'
import { useShowPaperPrescriptions } from './hooks/useShowPaperPrescriptions'
import { useShowNonPrescriptions } from './hooks/useShowNonPrescriptions'
import axios from 'axios'

import PropTypes from 'prop-types'

export const Form = () => {
  const { inputsValue, onChangeValue } = useInputsValue()
  const { fileUploadForms } = useInputFiles()
  const { electronicPrescription, addElectroPrescription, deleteElectroPrescription } = useShowElectronicPrescriptions()
  const { imageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription } = useShowPaperPrescriptions()
  const { nonPrescription, addNonPrescription, deleteNonPrescription } = useShowNonPrescriptions()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      inputsValue,
      electronicPrescription,
      nonPrescription,
      imageSrc,
      fileUploadForms
    }

    try {
      const response = await axios.post('http://localhost:8081/', formData)
      // setSuccessMessage('Formed is send successfully')
      console.log('Data saved:', response.data)
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }
  return (
    <div className={'order'}>
      <Link
        className={'order__link-home'}
        to={'/'}
      >
        Strona główna
      </Link>
      <Section
        className={'order__section username'}
        title={'Dane Pacjenta'}
      >
        <PatientData
          data={inputsValue}
          onChange={onChangeValue}
        />
      </Section>
      <Section
        className={'order__section electronicPrescription'}
        title={'Leki na recepte elektroniczną'}
      >
        <ElectronicData
          data={inputsValue}
          onChange={onChangeValue}
          result={addElectroPrescription}
        />
      </Section>
      <Section
        className={'order__section paperPrescription'}
        title={'Leki na receptę papierową'}
      >
        <PaperPrescriptionData
          data={fileUploadForms}
          onChange={handleFileChange}
          result={addPaperPrescription}
        />
      </Section>
      <Section
        className={'order__section nonPrescription'}
        title={'Pozostałe leki'}
      >
        <NonPrescriptionData
          data={inputsValue}
          onChange={onChangeValue}
          result={addNonPrescription}
        />
      </Section>
      <Section
        className={'order__section totalOrder'}
        title={'Twoje zamówienie'}
      >
        <form
          className={'totalOrder__form'}
          onSubmit={handleSubmit}
        >

          <PatientDataOrder
            data={inputsValue}
            onChange={onChangeValue}
          >
          </PatientDataOrder>
          <ElectronicOrder
            data={inputsValue}
            onChange={onChangeValue}
            result={electronicPrescription}
            remove={deleteElectroPrescription}
          >
          </ElectronicOrder>
          <PaperOrder
            data={imageSrc}
            result={imageSrc}
            resul2={fileUploadForms}
            remove={deletePaperPrescription}
          >
          </PaperOrder>
          <NonPrescriptionOrder
            data={inputsValue}
            onChange={onChangeValue}
            result={nonPrescription}
            remove={deleteNonPrescription}
          >
          </NonPrescriptionOrder>
          <div className={'text-center'}>
            <Button
              type={'submit'}
              className={'button__submit font-bold'}
              text={'WYŚLIJ'}
            />
          </div>
        </form>
      </Section>
    </div>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
