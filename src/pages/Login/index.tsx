
import React from 'react'
import { UserContext } from 'contexts/UserContex'
import { ButtonLogin, Buttonpurple } from 'styles/button'
import { CreateLogin, Forgetpass, LoginBackground, LoginBody, LoginForm, Separetor } from 'styles/login'
import { LoginInput } from 'styles/inputs'
import { ContextType } from 'types'


const Login: React.FC = () => {
    // User context
    const { user, saveUser } = React.useContext(UserContext) as ContextType;

    const handleLogin = () => {
        saveUser({
            id: 1,
            name: 'Lazaro',
            email: 'lazaro@gmail.com',
            password: '456'
        })
    }


    return (
        <LoginBody>
            <LoginBackground>
                <h1>Background My Trip</h1>
            </LoginBackground>
            <LoginForm>
                <h1>My Trip</h1>
                <ButtonLogin>Login with Google</ButtonLogin>
                <ButtonLogin>Login with Facebook</ButtonLogin>

                <Separetor></Separetor>

                <LoginInput type="email" />
                <LoginInput type="password" />
                <Forgetpass>Esqueceu a senha?</Forgetpass>
                <Buttonpurple onClick={handleLogin}>Login</Buttonpurple>
                <CreateLogin><p>Não tem uma conta?</p>Registrar</CreateLogin>

            </LoginForm>
        </LoginBody>
    )
}

export default Login
