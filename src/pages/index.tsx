import React from 'react'
import Login from 'pages/Login'
import { ThemeContext, Theme } from 'contexts/ThemeContext'
import { TravelContext } from 'contexts/TravelContext'

export default function Home() {
  const [theme, setTheme] = React.useState(Theme.Light)

  return (
    <TravelContext>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Login />
      </ThemeContext.Provider>
    </TravelContext>
  )
}
