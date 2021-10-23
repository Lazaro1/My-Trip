import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import { ContainerFlexColumn, ContainerFlexRow } from 'styles/container'
import { ProfileImg } from 'styles/image'

const Feed: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [screenState, setSceenState] = useState(true)

  return (
    <ContainerFlexColumn
      style={{ width: '100%', height: '100%', background: 'gray' }}
    >
      <ContainerFlexRow
        style={{ justifyContent: 'space-between', margin: '0 50px 0' }}
      >
        <h2 style={{ fontSize: '20px' }}>Menu</h2>
        <h1 style={{ fontSize: '40px' }}>My Trip</h1>
        <ProfileImg
          src="img/profile.jpg"
          style={{ width: '100px', height: '100px' }}
        />
      </ContainerFlexRow>
    </ContainerFlexColumn>
  )
}

export default Feed
