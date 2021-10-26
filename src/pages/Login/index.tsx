import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import { ContainerFlexRow, ContainerFlexColumn } from 'styles/container'
import { ButtonLogin } from 'styles/button'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <ContainerFlexRow style={{ height: '100%' }}>
      <div
        style={{
          background: 'blue',
          width: '50%',
          height: '100%'
        }}
      >
        <h1> lado direito</h1>
      </div>
      <div
        style={{
          background: 'red',
          width: '50%',
          height: '100%'
        }}
      >
        <ContainerFlexColumn>
          <h1 style={{ textAlign: 'right', color: '#6C63FF' }}>My Trip</h1>
          <ButtonLogin>
            <p>Login with google</p>
          </ButtonLogin>
        </ContainerFlexColumn>
      </div>
    </ContainerFlexRow>
  )
}

export default Login
