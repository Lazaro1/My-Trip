import * as React from 'react'

export const UserContext = React.createContext(null)

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<IUser>({
    id: 1,
    name: 'Álvaro',
    email: 'alvarojfjunior@gmail.com',
    password: '123'
  })

  const saveUser = (user: IUser) => {
    const newuser: IUser = {
      id: Math.random(),
      name: user.name,
      email: user.email,
      password: user.password
    }
    setUser(newuser)
  }

  return (
    <UserContext.Provider value={{ user: user, saveUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
