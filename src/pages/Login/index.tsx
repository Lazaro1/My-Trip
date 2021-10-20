import { ButtonLogin, Buttonpurple, IconButton } from 'styles/button'
import { CreateLogin, Forgetpass, LoginBackground, LoginBody, LoginForm, Separetor, SeparetorLine } from 'styles/login'
import { Input, InputInfo, LoginInput } from 'styles/inputs'


const handlePrintOnConsole = () => {
    console.log('Evendo do button')
}

const Login = () => (

    <LoginBody>
        <LoginBackground>
            <img src="img/background-login.png" alt="" />
        </LoginBackground>

        <LoginForm>
            <h1>My Trip</h1>
            <ButtonLogin>
                <IconButton src="img/google-icon.svg" /> Login with Google
            </ButtonLogin>
            <ButtonLogin>
                <IconButton src="img/facebook-icon.svg" /> Login with Facebook
            </ButtonLogin>

            <Separetor>
                <SeparetorLine></SeparetorLine>
                <p>OU</p>
                <SeparetorLine></SeparetorLine> 
            </Separetor>

            <LoginInput>
                <IconButton src="img/mail.png"/>
                <InputInfo>
                    <label>Email</label>
                    <Input type="email" placeholder="example@email.com"/>
                </InputInfo>
            </LoginInput>
            <LoginInput>
                <IconButton src="img/key.png"/>
                <InputInfo>
                    <label>Password</label>
                    <Input type="password" placeholder="***************"/>
                </InputInfo>    
            </LoginInput>
            <Forgetpass>Esqueceu a senha?</Forgetpass>
            <Buttonpurple>Login</Buttonpurple>
            <CreateLogin><p>Não tem uma conta?</p>Registrar</CreateLogin>

        </LoginForm>
    </LoginBody>

)

export default Login
