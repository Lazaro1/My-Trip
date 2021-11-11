import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import * as S from './style'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const Feed: React.FC = () => {
  const route = useRouter()

  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      route.push('/')
    }
  }, [])

  const buttonLogin = () => {
    route.push('/')
  }

  return (
    <S.ContainerFeed>
      <Header />

      <S.ContainerFlexRow>
        <S.ContainerLeft>
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
            <S.ButtonNewTravel onClick={buttonLogin}>
              Nova viagem
            </S.ButtonNewTravel>
          </S.BoxInfoPerfil>
        </S.ContainerRigth>
      </S.ContainerFlexRow>
    </S.ContainerFeed>
  )
}

export default Feed
