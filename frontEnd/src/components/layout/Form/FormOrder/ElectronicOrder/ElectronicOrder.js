import React from 'react'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Typography from '../../../../ui/Typography/Typography'

export const ElectronicOrder = (props) => {
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
        Zamówienie - recepta elektroniczna
      </Typography>
      {result.map((item) => (
        <div
          key={item.id}
        >
          PIN {item.PIN}
          <br></br>
          PESEL {item.PESEL}
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

ElectronicOrder.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  result: PropTypes.array,
  onChange: PropTypes.func,
  remove: PropTypes.func
}

export default ElectronicOrder
