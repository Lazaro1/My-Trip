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
      alert('Preencha os campos de usuário e senha')
    } else {
      route.push('/Feed')
    }
  }

  const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <S.Wrapper>
      <S.ContainerLeft>
        {isSiginVisible ? (
          <>
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
          </>
        ) : (
          <>
            <S.ContainerTitle>
              <S.Title>MyTrip</S.Title>
              <S.SubTitle>Bem vindo a sua</S.SubTitle>
              <S.SubTitle>Comunidade de Viagens</S.SubTitle>
              <S.Span>Crie sua conta</S.Span>
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
              <S.InputZone>
                <InputLabel>Confirm Password</InputLabel>
                <Input
                  type="Password"
                  placeholder="************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </S.InputZone>

              <S.ButtonSingIn
                type="submit"
                onClick={() => {
                  setIsSiginVisible(true)
                }}
              >
                Registrar
              </S.ButtonSingIn>
            </S.ContainerForm>
          </>
        )}
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.ContainerButton>
          {/*<ButtonJoin>Crie sua conta</ButtonJoin>*/}
          <S.ButtonSingUp
            onClick={() => {
              setIsSiginVisible(false)
            }}
            style={{ marginLeft: '16px' }}
          >
            Registar
          </S.ButtonSingUp>
        </S.ContainerButton>
        <S.LogoImage src="img/iconLogo.png" alt="Imagem Logo" />
      </S.ContainerRight>
    </S.Wrapper>
  )
}

export default Login
