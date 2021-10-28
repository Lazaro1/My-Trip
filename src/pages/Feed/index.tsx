import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'

import {
  ContainerFeed,
  ContainerFlexRow,
  ContainerLeft,
  ContainerRigth,
  BoxInfoPerfil,
  BoxTravel,
  PerfilImg,
  BackgroundPerfil
} from './style'

const Feed: React.FC = () => {
  return (
    <ContainerFeed>
      <Header />

      <ContainerFlexRow>
        <ContainerLeft>
          <BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </BoxTravel>
          <BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </BoxTravel>
          <BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img src="img/cachoeira.jpg" alt="" />
          </BoxTravel>
        </ContainerLeft>

        <ContainerRigth>
          <BoxInfoPerfil>
            <BackgroundPerfil src="img/retangulo.png" />
            <PerfilImg src="img/profile.jpg" />
          </BoxInfoPerfil>
        </ContainerRigth>
      </ContainerFlexRow>
    </ContainerFeed>
  )
}

export default Feed
