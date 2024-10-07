const fields = [
  {
    name: 'PIN',
    label: 'PIN recepty',
    required: true,
    pattern: /^[0-9]{4}$/,
    error: 'Numer PIN jest nieprawidłowy'
  },
  {
    name: 'PESEL',
    label: 'PESEL',
    required: true,
    pattern: '^[0-9]{11}$',
    error: 'Numer PESEL jest niepoprawny'
  }
]

export const validateForm = (data) => {
  let errors = {
    PIN: '',
    PESEL: ''
  }

  fields.forEach((field) => {
    const { label, name, required, pattern, error: errorMessage } = field
    const value = data[name]
    if (required) {
      if (value.length === 0) {
        const error = `${label} jest wymagany!`
        errors = { ...errors, [name]: error }
      } else if (pattern) {
        const reg = new RegExp(pattern)
        if (!reg.test(value)) {
          errors = { ...errors, [name]: errorMessage }
        }
      }
    }
  })
  return errors
}
