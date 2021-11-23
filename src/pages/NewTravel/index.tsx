import Header from 'components/Header'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'
import ModalTable from 'components/Modal/Modal'
import { useState } from 'react'
import { format } from 'date-fns'

interface IExpense {
  description: string
  value: number
  date: string
}

const NewTravel: React.FC = () => {
  const route = useRouter()

  const [openModal, setOpenModal] = useState(false)
  const [expenses, setExpenses] = useState<IExpense[]>([])

  const valorFormatado = (value) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  console.log(valorFormatado(123))

  const setExpensesValues = (expense: IExpense) => {
    const newArray = expenses
    newArray.push(expense)
    setExpenses(newArray)
    setOpenModal(false)
  }

  const removeExpense = (index) => {
    setExpenses(expenses.splice(index - 1, 1))
  }

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
              style={{
                cursor: 'pointer',
                color: 'blue',
                fontSize: '14px',
                margin: '10px 0 10px 0'
              }}
            >
              + Novo Gasto
            </a>
            {openModal && (
              <ModalTable
                closeModal={setOpenModal}
                setExpensesValue={setExpensesValues}
              />
            )}
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
                  {expenses.map((expense, index) => {
                    return (
                      <tr key={index}>
                        <th>{expense.description}</th>
                        <th style={{ color: 'red' }}>
                          {valorFormatado(expense.value)}
                          {console.log(expense.value)}
                          {console.log(valorFormatado(expense.value))}
                        </th>
                        <th>
                          {format(
                            new Date(expense.date.replace('-', ',')),
                            'dd/MM/yyyy'
                          )}
                        </th>
                        <th style={{ textAlign: 'center' }}>
                          <img
                            src="img/minus.svg"
                            alt=""
                            style={{ cursor: 'pointer' }}
                            onClick={() => removeExpense(index)}
                          />
                        </th>
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
