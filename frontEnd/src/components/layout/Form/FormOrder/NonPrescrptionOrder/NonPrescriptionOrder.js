import React from 'react'
import { FaTrash } from 'react-icons/fa'
import Typography from '../../../../ui/Typography/Typography'
import PropTypes from 'prop-types'

export const NonPrescriptionOrder = (props) => {
  const { data, result, remove } = props
  const handleClick = (id) => {
    remove(id, data)
  }
  return (
    <div className={'totalOrder__form__element mt-10 p-2.5'}>
      <Typography
        variant={'h5'}
        className={'uppercase mb-8'}
        style={{ fontWeight: 800 }}
      >
        Zamówienie - leki, suplementy diety i wyroby medyczne dostępne bez recepty
      </Typography>
      {result.map((item) => (
        <div key={item.id}>
          {item.drugName} {item.drugDose} {item.drugAmount}
          <button
            type={'button'}
            onClick={() => handleClick(item.id)}
            className={'ml-8'}
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  )
}

NonPrescriptionOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default NonPrescriptionOrder
