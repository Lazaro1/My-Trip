import * as React from 'react'
import { IUser } from "types"

export const UserContext = React.createContext(null)

const UserProvider: React.FC = ({ children }) => {

  const [user, setUser] = React.useState<IUser>({
    id: 1,
    name: 'Álvaro',
    email: 'alvarojfjunior@gmail.com',
    password: '123',
  })

  const saveUser = (user: IUser) => {
    const newuser: IUser = {
      id: Math.random(),
      name: user.title,
      email: user.description,
      password: user.password,
    }
    setUser(newuser)
  }

  return (
    <UserContext.Provider value={{ user:user, saveUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;