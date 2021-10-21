import React from 'react'
import Login from 'pages/Login'
import { ThemeContext, Theme } from 'contexts/ThemeContext'

export default function Home() {
  const [theme, setTheme] = React.useState(Theme.Light)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Login />
    </ThemeContext.Provider>
  )
}
