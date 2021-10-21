interface IUser {
  id: number
  name: string
  email: string
  password: string
}

type ContextUserType = {
  user: IUser
  saveUser: (user: IUser) => void
}
