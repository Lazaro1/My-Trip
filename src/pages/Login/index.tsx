import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import { ContainerFlexRow, ContainerFlexColumn } from 'styles/container'
import * as S from './styles'
import { ButtonSigIn, ButtonJoin } from 'styles/button'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <S.Wrapper>
      <S.ContainerLeft>
        <ContainerFlexColumn>
          <S.Title>LinkedIn</S.Title>
          <S.SubTitle>Welcome to your professional community</S.SubTitle>
          <S.SubTitle style={{ fontSize: '16px', color: '#000000' }}>
            Welcome Back! Please login your acount
          </S.SubTitle>
        </ContainerFlexColumn>
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
