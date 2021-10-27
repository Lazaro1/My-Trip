import { BoxInfoPerfil, BoxTravel } from 'styles/box'
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
    <ContainerFlexRow>
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
          <strong style={{ fontSize: '1.4rem' }}>Henrique Nobre</strong>
        </ContainerFlexRow>
      </ContainerFixedTop>

      <ContainerFlexRow
        style={{
          width: '100%',
          marginTop: '81px',
          background: '#E5E5E5',
          alignItems: 'flex-start'
        }}
      >
        <ContainerFlexColumn style={{ width: '71%' }}>
          <BoxTravel>
            <ProfileImg src="img/profile.jpg" />
            <strong style={{ fontSize: '1rem' }}>Henrique Nobre</strong>
            <h2>Estrada Real</h2>
          </BoxTravel>
          <BoxTravel>
            <ProfileImg src="img/profile.jpg" />
            <strong style={{ fontSize: '1rem' }}>Henrique Nobre</strong>
          </BoxTravel>
          <BoxTravel>
            <ProfileImg src="img/profile.jpg" />
            <strong style={{ fontSize: '1rem' }}>Henrique Nobre</strong>
          </BoxTravel>
        </ContainerFlexColumn>
        <ContainerFlexColumn
          style={{
            width: '29%',
            alignItems: 'flex-start'
          }}
        >
          <BoxInfoPerfil style={{ width: '70%' }}></BoxInfoPerfil>
        </ContainerFlexColumn>
      </ContainerFlexRow>
    </ContainerFlexRow>
  )
}

export default Feed
