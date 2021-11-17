import Header from 'components/Header'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'

const NewTravel: React.FC = () => {
  const route = useRouter()

  return (
    <S.ContainerFeed>
      <Header />

      <S.ContainerFlexRow>
        <S.ContainerLeft>
          <S.BoxTravel>
            <h1>Nova Viagem:</h1>
            <S.BoxInput placeholder={'Nome da viagem'}></S.BoxInput>
            <h2>De:</h2>
            <S.BoxInput type="date"></S.BoxInput>
            <h2>Até:</h2>
            <S.BoxInput type="date"></S.BoxInput>
            <h1>Gastos</h1>
            <a style={{ cursor: 'pointer' }}>+ Nova Transação</a>
            <S.TableExpenses>
              <table>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Hotel Ouro Preto</th>
                    <th>80,00</th>
                    <th>30/10/2021</th>
                    <th>-</th>
                  </tr>
                  <tr>
                    <th>Almoço</th>
                    <th>20,00</th>
                    <th>30/10/2021</th>
                    <th>-</th>
                  </tr>
                  <tr>
                    <th>Passeio de Trem</th>
                    <th>50,00</th>
                    <th>30/10/2021</th>
                    <th>-</th>
                  </tr>
                </tbody>
              </table>
            </S.TableExpenses>
            <h1>Rotas</h1>
            <img src="img/RotasMapa.png" alt="" />
            <h1>Diário de Bordo</h1>
            <S.BoxInput
              style={{ height: '100px' }}
              placeholder="Informações adcionais da viagem"
            />
            <h1>Fotos</h1>
            <a style={{ fontSize: '14px' }} href="">
              + Anexe as fotos aqui
            </a>
            <S.ButtonNewTravel>Salvar</S.ButtonNewTravel>
          </S.BoxTravel>
        </S.ContainerLeft>

        <S.ContainerRigth>
          <SideBar />
        </S.ContainerRigth>
      </S.ContainerFlexRow>
    </S.ContainerFeed>
  )
}

export default withAuth(NewTravel)
