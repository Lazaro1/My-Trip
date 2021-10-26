import {
  ContainerFixedTop,
  ContainerFlexColumn,
  ContainerFlexRow,
  ContainerFlexIcon
} from 'styles/container'
import { ProfileImg } from 'styles/image'
import { Input } from 'styles/inputs'

const Feed: React.FC = () => {
  return (
    <ContainerFixedTop>
      <ContainerFlexRow
        style={{
          width: '130px',
          height: '80px',
          borderRight: '1px solid #f4f4f4'
        }}
      >
        <img src="img/iconLogo.png" alt="" />
      </ContainerFlexRow>
      <ContainerFlexRow>
        <ContainerFlexIcon>
          <img src="img/IconFeed.svg" alt="" />
          <strong>FEED</strong>
        </ContainerFlexIcon>
        <ContainerFlexIcon>
          <img src="img/IconUsers.svg" alt="" />
          <strong>AMIGOS</strong>
        </ContainerFlexIcon>{' '}
        <ContainerFlexIcon>
          <img src="img/IconTravel.svg" alt="" />
          <strong>VIAGENS</strong>
        </ContainerFlexIcon>
      </ContainerFlexRow>
      <ContainerFlexRow
        style={{
          borderRight: '1px solid #f4f4f4',
          marginLeft: '13.8%',
          width: '25.4%'
        }}
      >
        <img src="img/iconSearch.svg" />
        <Input placeholder="Pesquisa" />
      </ContainerFlexRow>
      <ContainerFlexRow style={{ borderLeft: '1px solid #f4f4f4' }}>
        <ProfileImg src="img/profile.jpg" />
        <strong>Henrique Nobre</strong>
      </ContainerFlexRow>
    </ContainerFixedTop>
  )
}

export default Feed
