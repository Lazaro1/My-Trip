import { ButtonLogin } from 'styles/button'
import { Forgetpass, LoginBackground, LoginBody, LoginForm, Separetor } from 'styles/login'
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

            </LoginForm>
    </LoginBody>

)

export default Login
