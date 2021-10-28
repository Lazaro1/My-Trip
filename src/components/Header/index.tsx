import { ContainerFlexIcon } from 'styles/container'
import {
  ContainerFixedTop,
  ContainerLogo,
  ContainerMenu,
  ContainerProfile,
  ContainerSearch
} from './style'
import { Input } from 'styles/inputs'
import ProfileImg from 'components/ProfileImg'

const Header: React.FC = () => {
  return (
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
        <ProfileImg />
      </ContainerProfile>
    </ContainerFixedTop>
  )
}
export default Header
