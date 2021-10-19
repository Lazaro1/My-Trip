import { MainButton } from 'styles/button'
import { MainForm } from 'styles/form'
import { MainInput } from 'styles/inputs'

const handlePrintOnConsole = () => {
    console.log('Evendo do button')
}

const Login = () => (
    <MainForm>
        <h1> Login </h1>
        <MainInput type="email" />
        <MainInput type="password" />
        <MainButton onClick={handlePrintOnConsole}> Login </MainButton>
    </MainForm>
)

export default Login
