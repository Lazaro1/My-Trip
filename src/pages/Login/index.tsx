import { useState, useEffect } from 'react'
import { ButtonLogin, Buttonpurple } from 'styles/button'
import { useTheme, Theme } from 'contexts/ThemeContext'
import {
  CreateLogin,
  Forgetpass,
  LoginBackground,
  LoginForm,
  LoginH1,
  LoginTitle,
  Separetor,
  SeparetorLine
} from 'styles/login'
import { Input, InputInfo, LoginInput } from 'styles/inputs'
import { ContainerFlexRow } from 'styles/container'
import { IconImage } from 'styles/image'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [screenState, setSceenState] = useState(true)

  return (
    <ContainerFlexRow style={{ width: '100%', height: '100%' }}>
      <LoginBackground>
        <img src="img/background-login.png" alt="" />
      </LoginBackground>
      <LoginForm>
        {screenState ? (
          <>
            <LoginTitle>
              <LoginH1>My Trip</LoginH1>
            </LoginTitle>

            <ButtonLogin>
              <IconImage src="img/google-icon.svg" /> Logar com Google
            </ButtonLogin>
            <ButtonLogin>
              <IconImage src="img/facebook-icon.svg" /> Logar com Facebook
            </ButtonLogin>

            <Separetor>
              <SeparetorLine />
              <p>OU</p>
              <SeparetorLine />
            </Separetor>
            <LoginInput>
              <IconImage src="img/mail.png" />
              <InputInfo>
                <label>Email</label>
                <Input type="email" placeholder="example@email.com" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconImage src="img/key.png" />
              <InputInfo>
                <label>Senha</label>
                <Input type="password" placeholder="***************" />
              </InputInfo>
            </LoginInput>
            <Forgetpass>Esqueceu a senha?</Forgetpass>
            <Buttonpurple color="#6C63FF"> Login</Buttonpurple>
            <CreateLogin
              onClick={() => {
                setSceenState(false)
              }}
            >
              <p>Não tem uma conta?</p>Registrar
            </CreateLogin>
          </>
        ) : (
          <>
            <LoginTitle>
              <LoginH1>My Trip</LoginH1>
            </LoginTitle>

            <ButtonLogin>
              <IconImage src="img/google-icon.svg" /> Criar conta com o Google
            </ButtonLogin>
            <ButtonLogin>
              <IconImage src="img/facebook-icon.svg" /> Criar conta com o
              Facebook
            </ButtonLogin>

            <Separetor>
              <SeparetorLine></SeparetorLine>
              <p>OU</p>
              <SeparetorLine></SeparetorLine>
            </Separetor>
            <LoginInput>
              <IconImage src="img/face.png" />
              <InputInfo>
                <label>Nome</label>
                <Input type="text" placeholder="insert your name" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconImage src="img/mail.png" />
              <InputInfo>
                <label>Email</label>
                <Input type="email" placeholder="example@email.com" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconImage src="img/key.png" />
              <InputInfo>
                <label>Senha</label>
                <Input type="password" placeholder="***************" />
              </InputInfo>
            </LoginInput>

            <Buttonpurple>Criar Login</Buttonpurple>
          </>
        )}
      </LoginForm>
    </ContainerFlexRow>
  )
}

export default Login
