import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'

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
            <S.BoxProfileRow>
              <S.BoxProfileStatus>
                <h2>KM's Rodados</h2>
                <h2>30.000</h2>
              </S.BoxProfileStatus>
              <S.BoxProfileStatus>
                <h2>Cidades Visitadas</h2>
                <h2>200</h2>
              </S.BoxProfileStatus>
            </S.BoxProfileRow>
          </S.BoxProfileInfo>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <S.TravelImg src="img/cachoeira.jpeg" />
            <S.ContainerIconAction>
              <img src="img/iconLike.svg" alt="" />
              <p>15</p>
              <img
                src="img/iconComent.svg"
                alt=""
                style={{ marginLeft: '20px' }}
              />
              <p>3</p>
            </S.ContainerIconAction>
            <S.ContainerComent>
              <img src="img/profile.jpg" alt="" />
              <S.BoxInput
                placeholder={'Adcionar um comentário...'}
              ></S.BoxInput>
            </S.ContainerComent>
          </S.BoxTravel>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <S.TravelImg src="img/cachoeira.jpeg" />
            <S.ContainerIconAction>
              <img src="img/iconLike.svg" alt="" />
              <p>15</p>
              <img
                src="img/iconComent.svg"
                alt=""
                style={{ marginLeft: '20px' }}
              />
              <p>3</p>
            </S.ContainerIconAction>
            <S.ContainerComent>
              <img src="img/profile.jpg" alt="" />
              <S.BoxInput
                placeholder={'Adcionar um comentário...'}
              ></S.BoxInput>
            </S.ContainerComent>
          </S.BoxTravel>
          <S.BoxTravel>
            <ProfileImg />
            <h2>Estrada Real</h2>
            <S.TravelImg src="img/cachoeira.jpeg" />
            <S.ContainerIconAction>
              <img src="img/iconLike.svg" alt="" />
              <p>15</p>
              <img
                src="img/iconComent.svg"
                alt=""
                style={{ marginLeft: '20px' }}
              />
              <p>3</p>
            </S.ContainerIconAction>
            <S.ContainerComent>
              <img src="img/profile.jpg" alt="" />
              <S.BoxInput
                placeholder={'Adcionar um comentário...'}
              ></S.BoxInput>
            </S.ContainerComent>
          </S.BoxTravel>
        </S.ContainerLeft>

        <S.ContainerRigth>
          <SideBar />
        </S.ContainerRigth>
      </S.ContainerFlexRow>
    </S.ContainerFeed>
  )
}

export default withAuth(Profile)
