import React from 'react'
import { ErrorMessage, useField, FieldInputProps } from 'formik'
import * as S from './styles'

// import { Container } from './styles';
interface FieldProps extends FieldInputProps<''> {
  label: string
  name: string
  type: string
}

const Field: React.FC<FieldProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <S.InputZone>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </S.InputZone>
  )
}
export default Field
