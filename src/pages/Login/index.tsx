import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import { ContainerFlexRow, ContainerFlexColumn } from 'styles/container'
import { ButtonBorder } from 'styles/button'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <ContainerFlexRow style={{ height: '100%' }}>
      <ContainerFlexColumn
        style={{ height: '100%', width: '45.9%' }}
      ></ContainerFlexColumn>
      <ContainerFlexColumn
        style={{ height: '100%', width: '54.1%', background: '#e5e5e5' }}
      >
        <ContainerFlexRow
          style={{
            width: '81.49%',
            justifyContent: 'flex-end',
            marginTop: '10px'
          }}
        >
          <h2>Entrar</h2>
          <ButtonBorder>Sing in</ButtonBorder>
        </ContainerFlexRow>
        <img src="img/logo.png " />
      </ContainerFlexColumn>
    </ContainerFlexRow>
  )
}

export default Login
