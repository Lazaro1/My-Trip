interface IUser {
    id: number
    name: string
    email: string
    password: string
}

type ContextType = {
    todos: IUser[]
    saveUser: (user: IUser) => void
}