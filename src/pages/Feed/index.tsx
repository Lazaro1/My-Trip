import {
  ContainerFlexColumn,
  ContainerFlexRow,
  ContainerGrid,
  Header
} from 'styles/container'
import { IconImage, ProfileImg } from 'styles/image'
import { BoxImage, BoxInfo, BoxTravel, Travel, TravelNew } from 'styles/box'
import { Input, LoginInput } from 'styles/inputs'

const Feed: React.FC = () => {
  return (
    <ContainerGrid
      style={{ width: '100%', height: '100%', background: '#e8f1f2' }}
    >
      <Header>
        <h2 style={{ fontSize: '20px' }}>Menu</h2>
        <LoginInput style={{ width: '30%', height: '60%', marginTop: '0' }}>
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
      </Header>
      <BoxTravel>
        <TravelNew>
          <ProfileImg
            src="img/profile.jpg"
            style={{ width: '40px', height: '40px' }}
          />
          <LoginInput
            style={{
              width: '40%',
              height: '60%',
              paddingLeft: '10px',
              marginTop: '0'
            }}
          >
            <Input type="text" placeholder="Nome da viagem" />
          </LoginInput>
          <p>Nova Viagem</p>
        </TravelNew>
        <Travel>
          <ContainerFlexRow>
            <ProfileImg
              src="img/profile.jpg"
              style={{ width: '40px', height: '40px' }}
            />
            <h1 style={{ marginLeft: '40%' }}>Estrada Real</h1>
          </ContainerFlexRow>
        </Travel>
        <Travel>
          <ContainerFlexRow>
            <ProfileImg
              src="img/profile.jpg"
              style={{ width: '40px', height: '40px' }}
            />
            <h1 style={{ marginLeft: '40%' }}>Estrada Real</h1>
          </ContainerFlexRow>
          <ContainerFlexColumn>
            <BoxImage></BoxImage>
          </ContainerFlexColumn>
        </Travel>
      </BoxTravel>
      <BoxInfo>
        <h1>Amigos</h1>
      </BoxInfo>
    </ContainerGrid>
  )
}

export default Feed
