import {
  createContext,
  ReactNode,
  useContext,
  useState,
  SetStateAction
} from 'react'

type TravelContextType = {
  isCompleted: boolean
  setIsCompleted: React.Dispatch<SetStateAction<boolean>>
  toggleIsCompleted: () => void
}

export const TravelContext = createContext({} as TravelContextType)

type travelContextProviderProps = {
  children: ReactNode
}

export function ContextProvider({ children }: travelContextProviderProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  function toggleIsCompleted() {
    // setIsCompleted(!isCompleted)
    console.log(isCompleted, 'iscompleted')
  }

  return (
    <TravelContext.Provider
      value={{
        isCompleted,
        setIsCompleted,
        toggleIsCompleted
      }}
    >
      {children}
    </TravelContext.Provider>
  )
}

export const useTravel = () => {
  return useContext(TravelContext)
}
