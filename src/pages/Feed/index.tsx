import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import {
  ContainerFlexColumn,
  ContainerFlexRow,
  ContainerGrid
} from 'styles/container'
import { ProfileImg } from 'styles/image'
import { BoxInfo, BoxTravel, Travel } from 'styles/box'

const Feed: React.FC = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme(Theme.Dark)
    console.log('This is my context Theme ', theme)
  }, [])

  const [screenState, setSceenState] = useState(true)

  return (
    <ContainerGrid
      style={{ width: '100%', height: '100%', background: 'gray' }}
    >
      <ContainerFlexRow
        style={{
          justifyContent: 'space-between',
          gridArea: 'header'
        }}
      >
        <h2 style={{ fontSize: '20px' }}>Menu</h2>
        <h1 style={{ fontSize: '40px' }}>My Trip</h1>
        <ProfileImg
          src="img/profile.jpg"
          style={{ width: '100px', height: '100px' }}
        />
      </ContainerFlexRow>
      <BoxTravel>
        <Travel>
          <ProfileImg
            src="img/profile.jpg"
            style={{ width: '70px', height: '70px' }}
          />
          <h1>Estrada Real</h1>
        </Travel>
        <Travel>
          <ProfileImg
            src="img/profile.jpg"
            style={{ width: '70px', height: '70px' }}
          />
          <h1>Estrada Real</h1>
        </Travel>
      </BoxTravel>
      <BoxInfo></BoxInfo>
    </ContainerGrid>
  )
}

export default Feed
