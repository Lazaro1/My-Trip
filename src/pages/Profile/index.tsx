import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'

const Profile: React.FC = () => {
  const route = useRouter()

  return (
    <S.ContainerFeed>
      <Header />

      <S.ContainerFlexRow>
        <S.ContainerLeft>
          <S.BoxProfileInfo>
            <img
              style={{ borderRadius: '15px' }}
              src="img/BackProfile.png"
              alt="Background profile"
            />
            <S.BoxProfileRow>
              <S.PerfilImg src="img/profile.jpg" />
              <h1>Henrique Nobre</h1>
            </S.BoxProfileRow>
          </S.BoxProfileInfo>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </S.BoxTravel>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </S.BoxTravel>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </S.BoxTravel>
        </S.ContainerLeft>

        <S.ContainerRigth>
          <S.BoxInfoPerfil>
            <S.BackgroundPerfil src="img/retangulo.png" />
            <S.PerfilImg src="img/profile.jpg" />
            <S.ButtonNewTravel onClick={() => route.push('/NewTravel')}>
              Nova viagem
            </S.ButtonNewTravel>
          </S.BoxInfoPerfil>
        </S.ContainerRigth>
      </S.ContainerFlexRow>
    </S.ContainerFeed>
  )
}

export default withAuth(Profile)
