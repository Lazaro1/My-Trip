/* eslint-disable */ // pra não ficar tudo vermelho
import React from 'react'
import { UserContext } from 'contexts/UserContex'
import { ButtonLogin, Buttonpurple, IconButton } from 'styles/button'
import { CreateLogin, Forgetpass, LoginBackground, LoginBody, LoginForm, LoginH1, LoginSpan, LoginTitle, Separetor, SeparetorLine } from 'styles/login'
import { Input, InputInfo, InputName, LoginInput } from 'styles/inputs'
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
                <img src="img/background-login.png" alt="" />
            </LoginBackground>

            {/* <LoginForm>
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
                    <IconButton src="img/mail.png" />
                    <InputInfo>
                        <label>Email</label>
                        <Input type="email" placeholder="example@email.com" />
                    </InputInfo>
                </LoginInput>
                <LoginInput>
                    <IconButton src="img/key.png" />
                    <InputInfo>
                        <label>Password</label>
                        <Input type="password" placeholder="***************" />
                    </InputInfo>
                </LoginInput>
                <Forgetpass>Esqueceu a senha?</Forgetpass>
                <Buttonpurple>Login</Buttonpurple>
                <CreateLogin><p>Não tem uma conta?</p>Registrar</CreateLogin>

            </LoginForm> */}
            <LoginForm>

                <LoginTitle><LoginSpan>Welcome to</LoginSpan>  
                <LoginH1>My Trip</LoginH1></LoginTitle>

                <ButtonLogin>
                    <IconButton src="img/google-icon.svg" /> Creat a cont with Google
                </ButtonLogin>
                <ButtonLogin>
                    <IconButton src="img/facebook-icon.svg" /> Creat a cont  with Facebook
                </ButtonLogin>

                <Separetor>
                    <SeparetorLine></SeparetorLine>
                    <p>OU</p>
                    <SeparetorLine></SeparetorLine>
                </Separetor>
                 
                <LoginInput>
                    <IconButton src="img/face.png" />
                    <InputInfo>
                        <label>Name</label>
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
                        <label>Password</label>
                        <Input type="password" placeholder="***************" />
                    </InputInfo>
                </LoginInput>
               
                {/* <Forgetpass>Esqueceu a senha?</Forgetpass> */}
                <Buttonpurple>Creat Login</Buttonpurple>
                {/* <CreateLogin><p>Não tem uma conta?</p>Registrar</CreateLogin> */}

            </LoginForm>
        </LoginBody>
    )
}

export default Login
