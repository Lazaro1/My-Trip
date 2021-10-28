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
          <S.Title>LinkedIn</S.Title>
          <S.SubTitle>Welcome to your </S.SubTitle>
          <S.SubTitle>professional community</S.SubTitle>
          <S.Span>Welcome Back! Please login your acount</S.Span>
        </S.ContainerTitle>
        <S.ContainerForm>
          <S.InputZone>
            <InputLabel>Email Address</InputLabel>
            <Input type="email" placeholder="example@email.com" />
          </S.InputZone>
          <S.InputZone>
            <InputLabel>Password</InputLabel>
            <Input type="Password" placeholder="password" />
          </S.InputZone>
        </S.ContainerForm>
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.ContainerButton>
          <ButtonJoin>Join now</ButtonJoin>
          <ButtonSigIn style={{ marginLeft: '16px' }}>Sing in</ButtonSigIn>
        </S.ContainerButton>
        <img src="img/logo.png " />
      </S.ContainerRight>
    </S.Wrapper>
  )
}

export default Login
