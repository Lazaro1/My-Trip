import { ContainerFixedTop, ContainerFlexRow } from 'styles/container'

const Feed: React.FC = () => {
  return (
    <ContainerFixedTop>
      <ContainerFlexRow>
        <img src="img/iconLogo.svg" alt="" />
      </ContainerFlexRow>
      <ContainerFlexRow>
        <img src="img/IconFeed.svg" alt="" />
        <img src="img/IconUsers.svg" alt="" />
        <img src="img/IconTravel.svg" alt="" />
      </ContainerFlexRow>
    </ContainerFixedTop>
  )
}

export default Feed
