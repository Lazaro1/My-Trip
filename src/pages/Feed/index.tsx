import { useState, useEffect } from 'react'
import { useTheme, Theme } from 'contexts/ThemeContext'
import {
  ContainerFlexColumn,
  ContainerFlexRow,
  ContainerGrid
} from 'styles/container'
import { IconImage, ProfileImg } from 'styles/image'
import { BoxInfo, BoxTravel, Travel } from 'styles/box'
import { Input, LoginInput } from 'styles/inputs'

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
          width: '100%',
          justifyContent: 'space-between',
          gridArea: 'header',
          padding: '10px',
          borderBottom: '1px solid black'
        }}
      >
        <h2 style={{ fontSize: '20px' }}>Menu</h2>
        <LoginInput style={{ width: '30%', height: '40%', marginTop: '0' }}>
          <IconImage src="img/search.svg" />
          <Input type="text" placeholder="Pesquisa" />
        </LoginInput>
        <h1 style={{ fontSize: '40px' }}>My Trip</h1>
        <ContainerFlexRow>
          <ProfileImg
            src="img/profile.jpg"
            style={{ width: '50px', height: '50px' }}
          />
          <h2>Henrique</h2>
        </ContainerFlexRow>
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
