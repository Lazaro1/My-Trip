/* eslint-disable */ // pra não ficar tudo vermelho
import React, {useState} from 'react'
import { UserContext } from 'contexts/UserContex'
import { ButtonLogin, Buttonpurple, IconButton } from 'styles/button'
import { CreateLogin, Forgetpass, LoginBackground, LoginBody, LoginForm, LoginH1, LoginSpan, LoginTitle, Separetor, SeparetorLine } from 'styles/login'
import { Input, InputInfo, LoginInput } from 'styles/inputs'



const Login: React.FC = () => {
    // User context
    const { user, saveUser } = React.useContext(UserContext) as ContextType;
    const [screenState, setSceenState] = useState(true)

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
            <LoginForm>  
                {screenState ? (
                    <>
                        <LoginTitle><LoginSpan>Bem Vindo ao </LoginSpan>  
                        <LoginH1>My Trip</LoginH1></LoginTitle>
                    
                        <ButtonLogin>
                            <IconButton src="img/google-icon.svg" /> Logar com Google
                        </ButtonLogin>
                        <ButtonLogin>
                            <IconButton src="img/facebook-icon.svg" /> Logar com Facebook
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
                                <label>Senha</label>
                                <Input type="password" placeholder="***************" />
                            </InputInfo>
                        </LoginInput>
                        <Forgetpass>Esqueceu a senha?</Forgetpass>
                        <Buttonpurple>Login</Buttonpurple>
                        <CreateLogin onClick={() => {setSceenState(false)}}><p>Não tem uma conta?</p>Registrar</CreateLogin>                    
                    </>
                ) : (
                    <>
                        <LoginTitle><LoginSpan>Bem Vindo ao </LoginSpan>  
                        <LoginH1>My Trip</LoginH1></LoginTitle>

                        <ButtonLogin>
                            <IconButton src="img/google-icon.svg" /> Criar conta com o Google
                        </ButtonLogin>
                        <ButtonLogin>
                            <IconButton src="img/facebook-icon.svg" /> Criar conta com o Facebook
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
