import { ButtonLogin, Buttonpurple } from 'styles/button'
import { CreateLogin, Forgetpass, LoginBackground, LoginBody, LoginForm, Separetor } from 'styles/login'
import { LoginInput } from 'styles/inputs'


const handlePrintOnConsole = () => {
    console.log('Evendo do button')
}

const Login = () => (

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
                <Buttonpurple>Login</Buttonpurple>
                <CreateLogin><p>Não tem uma conta?</p>Registrar</CreateLogin>

            </LoginForm>
    </LoginBody>

)

export default Login
