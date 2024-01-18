import React from 'react'
import Section from './components/Section'
import PatientData from './components/layout/PatientData'
import ElectronicData from './components/layout/ElectronicData'
import NonPrescriptionData from './components/layout/NonPrescriptionData'
import ElectronicOrder from './components/layout/ElectronicOrder'
import PaperOrder from './components/layout/PaperOrder/PaperOrder'
import NonPrescriptionOrder from './components/layout/NonPrescrptionOrder'
import Button from './components/ui/Button'
import PaperPrescriptionData from './components/layout/PaperPrescriptionData'
import { useInputsValue } from './hooks/useInputsValue'
import { useShowElectronicPrescriptions } from './hooks/useShowElectronicPrescriptions'
import { useShowPaperPrescriptions } from './hooks/useShowPaperPrescriptions'
import { useShowNonPrescriptions } from './hooks/useShowNonPrescriptions'
import PropTypes from 'prop-types'
import InputFile from './components/ui/InputFile'
export const Form = (props) => {
  const {
    className
  } = props

  const { inputsValue, onChangeValue } = useInputsValue()
  const { electronicPrescription, addElectroPrescription, deleteElectroPrescription } = useShowElectronicPrescriptions()
  const { imageSrc, handleFileChange } = useShowPaperPrescriptions()
  const { nonPrescription, addNonPrescription, deleteNonPrescription } = useShowNonPrescriptions()
  return (
    <div className={className}>
      <Section
        className={'section-form-username'}
        title={'Name and Surname'}
        content={<PatientData></PatientData>}
      >
      </Section>
      <Section
        className={'section-form-electronicPrescription'}
        title={'Drugs for electronic prescription'}
        content={
          <ElectronicData
            data={inputsValue}
            onChange={onChangeValue}
            result={addElectroPrescription}
          >
          </ElectronicData>
        }
      >
      </Section>
      <Section
        className={'section-form-paperPrescription'}
        title={'Drugs for paper prescription'}
        content={
          <PaperPrescriptionData
            // data={fileInput}
            onChange={handleFileChange}
            // result={addPaperPrescription}
          >

          </PaperPrescriptionData>
        }
      >
      </Section>
      <Section
        className={'section-form-nonPrescription'}
        title={'Other drugs and medicaments'}
        content={
          <NonPrescriptionData
            data={inputsValue}
            onChange={onChangeValue}
            result={addNonPrescription}
          >
          </NonPrescriptionData>
        }
      >
      </Section>
      <Section
        className={'section-form-order'}
        title={'Your order'}
        content={
          <>
            <ElectronicOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={electronicPrescription}
              remove={deleteElectroPrescription}
            >
            </ElectronicOrder>
            <PaperOrder
              data={InputFile}
              onChange={handleFileChange}
              result={imageSrc}
              remove={deleteElectroPrescription}
            >
            </PaperOrder>
            <NonPrescriptionOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={nonPrescription}
              remove={deleteNonPrescription}
            >
            </NonPrescriptionOrder>
          </>
        }
      >
      </Section>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Zamawiam'}
      >
      </Button>
    </div>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
