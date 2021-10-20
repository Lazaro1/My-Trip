import { UserContext } from 'contexts/UserContex'
import React, { useEffect } from 'react'
import { MainButton } from 'styles/button'
import { MainForm } from 'styles/form'
import { MainInput } from 'styles/inputs'
import { ContextType } from 'types'

const handlePrintOnConsole = () => {
    console.log('Evendo do button')
}

const Login: React.FC = () => {
    const { user, saveUser } = React.useContext(UserContext) as ContextType;

    useEffect(() => {
        saveUser({
            id: 1,
            name: 'Lazaro',
            email: 'lazaro@gmail.com',
            password: '456'
        })
    }, [])

    return <MainForm>
        <h1> Login </h1>
        <MainInput type="email" value={user.email} />
        <MainInput type="text" value={user.password} />
        <MainButton onClick={handlePrintOnConsole}> Login </MainButton>
    </MainForm>
}

export default Login
