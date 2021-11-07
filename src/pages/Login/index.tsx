import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import * as S from './styles'
import { ButtonSigIn, ButtonJoin } from 'styles/button'
import { Input, InputLabel } from 'styles/inputs'
import { useRouter } from 'next/router'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const route = useRouter()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const handleSignIn = () => {
    if (!email || !password) {
      alert('senha em branco')
    } else {
      route.push('/Feed')
    }
  }

  // const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <S.Wrapper>
      <S.ContainerLeft>
        <S.ContainerTitle>
          <S.Title>MyTrip</S.Title>
          <S.SubTitle>Bem vindo a sua</S.SubTitle>
          <S.SubTitle>Comunidade de Viagens</S.SubTitle>
          <S.Span>Entre com sua conta</S.Span>
        </S.ContainerTitle>
        <S.ContainerForm>
          <S.InputZone>
            <InputLabel>Email Address</InputLabel>
            <Input
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputZone>
          <S.InputZone>
            <InputLabel>Password</InputLabel>
            <Input
              type="Password"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputZone>

          <S.ButtonSingIn type="submit" onClick={(e) => handleSignIn(e)}>
            Login
          </S.ButtonSingIn>
        </S.ContainerForm>
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.ContainerButton>
          <ButtonJoin>Join now</ButtonJoin>
          <ButtonSigIn style={{ marginLeft: '16px' }}>Sing in</ButtonSigIn>
        </S.ContainerButton>
        <S.LogoImage src="img/iconLogo.png" alt="Imagem Logo" />
      </S.ContainerRight>
    </S.Wrapper>
  )
}

export default Login
