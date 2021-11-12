import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import * as S from './style'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import withAuth from 'utils/withAuth'

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
          <S.BoxInfoPerfil>
            <S.BackgroundPerfil src="img/retangulo.png" />
            <S.PerfilImg src="img/profile.jpg" />
            <h2>Henrique Nobre</h2>
          </S.BoxInfoPerfil>
          <S.BoxInfoRigth>
            <S.ButtonNewTravel onClick={() => route.push('/NewTravel')}>
              Nova viagem
            </S.ButtonNewTravel>
          </S.BoxInfoRigth>
          <S.BoxInfoRigth>
            <h2>Principais Viagens</h2>
            <S.BoxInfoRow>
              <img src="img/cachoeira.png" alt="" />
              <p>Estrada Real</p>
            </S.BoxInfoRow>
            <S.BoxInfoRow>
              <img src="img/cachoeira.png" alt="" />
              <p>Estrada Real</p>
            </S.BoxInfoRow>
            <S.BoxInfoRow>
              <img src="img/cachoeira.png" alt="" />
              <p>Estrada Real</p>
            </S.BoxInfoRow>
          </S.BoxInfoRigth>
          <S.BoxInfoRigth>
            <h2>Cidades Visitadas</h2>
            <h3>Ouro Preto-MG</h3>
            <h3>Mariana-MG</h3>
            <h3>Conselheiro Mata-MG</h3>
            <h3>Conceição-MG</h3>
            <h3>Belo Horizonte-MG</h3>
          </S.BoxInfoRigth>
          <S.BoxInfoRigth>
            <h2 style={{ marginBottom: '20px' }}>Amigos</h2>
            <ProfileImg />
            <ProfileImg />
            <ProfileImg />
          </S.BoxInfoRigth>
        </S.ContainerRigth>
      </S.ContainerFlexRow>
    </S.ContainerFeed>
  )
}

export default withAuth(Feed)
