import { BoxInfoPerfil, BoxTravel } from 'styles/box'
import {
  ContainerFlexColumn,
  ContainerFlexRow,
  ContainerFlexIcon
} from 'styles/container'
import {
  ContainerFixedTop,
  ContainerLogo,
  ContainerMenu,
  ContainerProfile,
  ContainerSearch
} from 'styles/containerHeader'
import { ProfileImg } from 'styles/image'
import { Input } from 'styles/inputs'
import { ContainerFeed } from './feed'

const Feed: React.FC = () => {
  return (
    <ContainerFeed>
      <ContainerFixedTop>
        <ContainerLogo>
          <img src="img/iconLogo.png" alt="" />
        </ContainerLogo>
        <ContainerMenu>
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
        </ContainerMenu>
        <ContainerSearch>
          <img src="img/iconSearch.svg" />
          <Input placeholder="Pesquisa" />
        </ContainerSearch>
        <ContainerProfile>
          <ProfileImg src="img/profile.jpg" />
          <strong>Henrique Nobre</strong>
        </ContainerProfile>
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
            <ContainerFlexRow style={{ justifyContent: 'flex-start' }}>
              <ProfileImg src="img/profile.jpg" />
              <strong style={{ fontSize: '1rem' }}>Henrique Nobre</strong>
              <h2>Estrada Real</h2>
            </ContainerFlexRow>
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
    </ContainerFeed>
  )
}

export default Feed
