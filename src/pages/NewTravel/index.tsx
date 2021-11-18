import Header from 'components/Header'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'
import ModalTable from 'components/Modal/Modal'
import { useState } from 'react'
import { TravelExpense } from './fakeData'

const NewTravel: React.FC = () => {
  const route = useRouter()

  const [openModal, setOpenModal] = useState(false)

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
            <a
              onClick={() => {
                setOpenModal(true)
              }}
              style={{ cursor: 'pointer' }}
            >
              + Nova Transação
            </a>
            {openModal && <ModalTable closeModal={setOpenModal} />}
            {TravelExpense.map((expense) => {
              console.log(expense)
            })}
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
                  {TravelExpense.map((expense) => {
                    return (
                      <tr key={expense.id}>
                        <th>{expense.description}</th>
                        <th>{expense.value}</th>
                        <th>{expense.date}</th>
                        <th>-</th>
                      </tr>
                    )
                  })}
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
