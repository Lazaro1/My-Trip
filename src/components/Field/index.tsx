import React from 'react'
import { ErrorMessage, useField, FieldInputProps } from 'formik'
import * as S from './styles'
import { GrCircleAlert } from 'react-icons/gr'

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
      {meta.touched && meta.error ? (
        <S.DangerZone>
          {/* <GrCircleAlert style={{ color: 'red', fontSize: '15px' }} /> */}
          <S.ErrorLabel>{meta.error}</S.ErrorLabel>
        </S.DangerZone>
      ) : null}
    </S.InputZone>
  )
}
export default Field
