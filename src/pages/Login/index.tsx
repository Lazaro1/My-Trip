import { useState, useEffect } from 'react'
import { ButtonLogin, Buttonpurple, IconButton } from 'styles/button'
import { useTheme, Theme } from 'contexts/ThemeContext'
import {
  CreateLogin,
  Forgetpass,
  LoginBackground,
  LoginBody,
  LoginForm,
  LoginH1,
  LoginSpan,
  LoginTitle,
  Separetor,
  SeparetorLine
} from 'styles/login'
import { Input, InputInfo, LoginInput } from 'styles/inputs'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [screenState, setSceenState] = useState(true)

  return (
    <LoginBody>
      <LoginBackground>
        <img src="img/background-login.png" alt="" />
      </LoginBackground>
      <LoginForm style={{ border: '1px black solid' }}>
        {screenState ? (
          <>
            <LoginTitle>
              <LoginSpan>Bem Vindo ao </LoginSpan>
              <LoginH1>My Trip</LoginH1>
            </LoginTitle>

            <ButtonLogin>
              <IconButton src="img/google-icon.svg" /> Logar com Google
            </ButtonLogin>
            <ButtonLogin>
              <IconButton src="img/facebook-icon.svg" /> Logar com Facebook
            </ButtonLogin>

            <Separetor>
              <SeparetorLine />
              <p>OU</p>
              <SeparetorLine />
            </Separetor>
            <LoginInput>
              <IconButton src="img/mail.png" />
              <InputInfo>
                <label>Email</label>
                <Input type="email" placeholder="example@email.com" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconButton src="img/key.png" />
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
              <LoginSpan>Bem Vindo ao </LoginSpan>
              <LoginH1>My Trip</LoginH1>
            </LoginTitle>

            <ButtonLogin>
              <IconButton src="img/google-icon.svg" /> Criar conta com o Google
            </ButtonLogin>
            <ButtonLogin>
              <IconButton src="img/facebook-icon.svg" /> Criar conta com o
              Facebook
            </ButtonLogin>

            <Separetor>
              <SeparetorLine></SeparetorLine>
              <p>OU</p>
              <SeparetorLine></SeparetorLine>
            </Separetor>
            <LoginInput>
              <IconButton src="img/face.png" />
              <InputInfo>
                <label>Nome</label>
                <Input type="text" placeholder="insert your name" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconButton src="img/mail.png" />
              <InputInfo>
                <label>Email</label>
                <Input type="email" placeholder="example@email.com" />
              </InputInfo>
            </LoginInput>
            <LoginInput>
              <IconButton src="img/key.png" />
              <InputInfo>
                <label>Senha</label>
                <Input type="password" placeholder="***************" />
              </InputInfo>
            </LoginInput>

            <Buttonpurple>Criar Login</Buttonpurple>
          </>
        )}
      </LoginForm>
    </LoginBody>
  )
}

export default Login
