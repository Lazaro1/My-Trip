import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import * as S from './styles'
import { Input, InputLabel } from 'styles/inputs'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import addDays from 'date-fns/addDays'

const Login: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const route = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confimPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    setTheme(Theme.Light)
    console.log('This is my context Theme ', theme)
  }, [])

  const handleSignIn = () => {
    const resultUser = localStorage.getItem('userAuth')
    const usersLogged = resultUser ? JSON.parse(resultUser) : {}

    if (!email || !password) {
      alert('Preencha os campos de usuário e senha')
    } else if (usersLogged.email == email && usersLogged.password == password) {
      Cookie.set('token', 'token-here', {
        expires: addDays(new Date(), 1)
      })

      route.push('/Feed')
    } else {
      alert('Usuário ou senha digitado incorretamente')
    }
  }

  const createLogin = () => {
    const userLogin = {
      email: email,
      password: password
    }

    if (!email || !password) {
      alert('Preencha os campos de usuário e senha')
    } else if (password != confimPassword) {
      alert('Confirmação de senha incorreta')
    } else {
      localStorage.setItem('userAuth', JSON.stringify(userLogin))

      setIsSiginVisible(true)
    }
  }

  const enterLogin = (event) => {
    if (event.keyCode === 13) {
      handleSignIn()
    }
  }

  const enterRegister = (event) => {
    if (event.keyCode === 13) {
      createLogin()
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
                  onKeyDown={(e) => enterLogin(e)}
                />
              </S.InputZone>
            </S.ContainerForm>
            <S.ContainerRow>
              <S.ContainerRow>
                <input type="checkbox" />
                <label htmlFor="">Lembra-me</label>
              </S.ContainerRow>
              <a href="">Esqueceu sua senha</a>
            </S.ContainerRow>
            <S.ButtonSingIn type="submit" onClick={(e) => handleSignIn(e)}>
              Login
            </S.ButtonSingIn>
            <S.ContainerRow
              style={{
                fontSize: '18px',
                marginTop: '5%',
                justifyContent: 'flex-start'
              }}
            >
              <p>Ou logar com</p>
              <a
                style={{
                  color: '#3751fe',
                  marginLeft: '10px'
                }}
                href=""
              >
                Google
              </a>
            </S.ContainerRow>
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => enterRegister(e)}
                />
              </S.InputZone>

              <S.ButtonSingIn type="submit" onClick={(e) => createLogin(e)}>
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
        <S.LogoImage src="img/LogoLogin.png" alt="Imagem Logo" />
      </S.ContainerRight>
    </S.Wrapper>
  )
}

export default Login
