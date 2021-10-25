import React from 'react'
import Login from 'pages/Login'
import { ThemeContext, Theme } from 'contexts/ThemeContext'
import Feed from './Feed'

export default function Home() {
  const [theme, setTheme] = React.useState(Theme.Light)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Feed />
    </ThemeContext.Provider>
  )
}
