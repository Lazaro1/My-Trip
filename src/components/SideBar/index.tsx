import Header from 'components/Header'
import ProfileImg from 'components/ProfileImg'
import * as S from './style'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import withAuth from 'utils/withAuth'
import { useTravel } from 'contexts/TravelContext'

const SideBar: React.FC = () => {
  const route = useRouter()
  const { toggleIsCompleted, setIsCompleted, isCompleted } = useTravel()

  const teste = () => {
    // setIsCompleted(true)
    console.log(isCompleted)
  }

  return (
    <>
      <S.BoxInfoPerfil>
        <S.BackgroundPerfil src="img/retangulo.png" />
        <S.PerfilImg src="img/profile.jpg" />
        <h2>Henrique Nobre</h2>
      </S.BoxInfoPerfil>
      <S.BoxInfoRigth>
        <S.ButtonNewTravel onClick={() => teste()}>
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
    </>
  )
}

export default SideBar
