import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import * as S from './styles'
import { ButtonSigIn, ButtonJoin } from 'styles/button'
import { Input, InputLabel } from 'styles/inputs'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

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
            <Input type="email" placeholder="example@email.com" />
          </S.InputZone>
          <S.InputZone>
            <InputLabel>Password</InputLabel>
            <Input type="Password" placeholder="************" />
          </S.InputZone>
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
