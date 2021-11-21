import * as S from  './style'
import ProfileImg from 'components/ProfileImg'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const route = useRouter()
  return (
    <S.ContainerFixedTop>
      <S.ContainerLogo>
        <img src="img/iconLogo.png" alt="" />
      </S.ContainerLogo>
      <S.ContainerMenu>
        <S.ContainerFlexIcon onClick={() => route.push('/Feed')}>
          <S.IconImage src="img/iconFeed.svg" />
          <strong>FEED</strong>
        </S.ContainerFlexIcon>
        <S.ContainerFlexIcon>
          <S.IconImage src="img/iconUsers.svg" />
          <strong>AMIGOS</strong>
        </S.ContainerFlexIcon>
        <S.ContainerFlexIcon>
          <S.IconImage src="img/iconTravel.svg" />
          <strong>VIAGENS</strong>
        </S.ContainerFlexIcon>
      </S.ContainerMenu>
      <S.ContainerSearch>
        <img src="img/iconSearch.svg" />
        <S.Input placeholder="Pesquisa" />
      </S.ContainerSearch>
      <S.ContainerProfile onClick={() => route.push('/Profile')}>
        <ProfileImg />
      </S.ContainerProfile>
    </S.ContainerFixedTop>
  )
}
export default Header
