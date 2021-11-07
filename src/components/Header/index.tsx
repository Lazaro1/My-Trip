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
import { IconImage } from 'styles/image'

const Header: React.FC = () => {
  return (
    <ContainerFixedTop>
      <ContainerLogo>
        <img src="img/iconLogo.png" alt="" />
      </ContainerLogo>
      <ContainerMenu>
        <ContainerFlexIcon>
          <IconImage src="img/iconFeed.svg" />
          <strong>FEED</strong>
        </ContainerFlexIcon>
        <ContainerFlexIcon>
          <IconImage src="img/iconUsers.svg" />
          <strong>AMIGOS</strong>
        </ContainerFlexIcon>{' '}
        <ContainerFlexIcon>
          <IconImage src="img/iconTravel.svg" />
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
