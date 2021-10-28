import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import {
  ContainerFeed,
  ContainerFlexRow,
  ContainerLeft,
  ContainerRigth,
  BoxInfoPerfil,
  BoxTravel
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
          </BoxTravel>
          <BoxTravel>
            <ProfileImg />
          </BoxTravel>
        </ContainerLeft>
        <ContainerRigth>
          <BoxInfoPerfil></BoxInfoPerfil>
        </ContainerRigth>
      </ContainerFlexRow>
    </ContainerFeed>
  )
}

export default Feed
