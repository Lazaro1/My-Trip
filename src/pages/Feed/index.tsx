import Header from 'components/Header'
import ProfileImg2 from 'components/ProfileImg2'
import * as S from './style'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'

const Feed: React.FC = () => {
  const route = useRouter()

  return (
    <S.ContainerFeed>
      <Header />

      <S.ContainerFlexRow>
        <S.ContainerLeft>
          <S.BoxTravel>
            <ProfileImg2 />
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
            <ProfileImg2 />
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
            <ProfileImg2 />
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

export default withAuth(Feed)
