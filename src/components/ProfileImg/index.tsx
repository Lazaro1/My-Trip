import { ContainerFlex, Profile } from './style'

const ProfileImg: React.FC = () => {
  return (
    <ContainerFlex>
      <Profile src="img/profile.jpg"></Profile>
      <strong>Henrique Nobre</strong>
    </ContainerFlex>
  )
}
export default ProfileImg
