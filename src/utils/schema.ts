import * as Yup from 'yup'

export const ValidationRegister = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required('Por Favor entre com sua Senha!')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial.'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'A senha deve ser igual ao campo acima')
    .required('Confirme a senha')
})

export const SigIn = Yup.object({
  user: Yup.string()
    .max(15, 'Menos de 10 caracteres')
    .required('Digite seu Usuário'),
  password: Yup.string().required('Por Favor entre com sua Senha!')
})
