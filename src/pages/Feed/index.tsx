import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
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
            <ProfileImg />
            <h2>Estrada Real</h2>
            <img
              src="img/cachoeira.jpeg"
              alt=""
              style={{
                height: '400px',
                objectFit: 'cover',
                objectPosition: 'center',
                overflow: 'hidden'
              }}
            />
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
            <img
              src="img/cachoeira.jpeg"
              alt=""
              style={{
                height: '400px',
                objectFit: 'cover',
                objectPosition: 'center',
                overflow: 'hidden'
              }}
            />
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
            <img
              src="img/cachoeira.jpeg"
              alt=""
              style={{
                height: '400px',
                objectFit: 'cover',
                objectPosition: 'center',
                overflow: 'hidden'
              }}
            />
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
