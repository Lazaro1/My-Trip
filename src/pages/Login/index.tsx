import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import { ContainerFlexRow, ContainerFlexColumn } from 'styles/container'
import { ButtonBorder, ButtonSimple } from 'styles/button'

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
        style={{
          height: '100%',
          width: '45.9%',
          justifyContent: 'center'
        }}
      >
        <ContainerFlexColumn>
          <h1>ESQUERDA</h1>
        </ContainerFlexColumn>
      </ContainerFlexColumn>

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
          <ContainerFlexRow
            style={{ marginBottom: '191px', marginTop: '41px' }}
          >
            <ButtonSimple>Join now</ButtonSimple>
            <ButtonBorder style={{ marginLeft: '16px' }}>Sing in</ButtonBorder>
          </ContainerFlexRow>
        </ContainerFlexRow>
        <img src="img/logo.png " />
      </ContainerFlexColumn>
    </ContainerFlexRow>
  )
}

export default Login
