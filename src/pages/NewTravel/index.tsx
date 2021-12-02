import Header from 'components/Header'
import * as S from './style'
import { useRouter } from 'next/router'
import withAuth from 'utils/withAuth'
import SideBar from 'components/SideBar'
import ModalTable from 'components/Modal/Modal'
import { useState } from 'react'
import { format } from 'date-fns'
import MapBox from 'components/Map'

interface IExpense {
  description: string
  value: number
  date: string
}

const NewTravel: React.FC = () => {
  const route = useRouter()

  const [openModal, setOpenModal] = useState(false)
  const [expenses, setExpenses] = useState<IExpense[]>([])
  const [distances, setDistances] = useState(0)
  const [comsumption, setComsumption] = useState(0)

  let totalExpenses = 0
  if (expenses.length != 0) {
    totalExpenses = expenses
      .map((item) => parseFloat(item.value))
      .reduce((prev, next) => prev + next)
  }

  const formatValue = (value) => {
    const fvalue = parseFloat(value)
    return fvalue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  const formatDate = (value) =>
    format(new Date(value.replace('-', ',')), 'dd/MM/yyyy')

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
                          {formatValue(expense.value)}
                        </th>
                        <th>{formatDate(expense.date)}</th>
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
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th>{formatValue(totalExpenses)}</th>
                  </tr>
                </tbody>
              </table>
            </S.TableExpenses>
            <h1>Rotas</h1>
            <div style={{ height: '500px' }}>
              <MapBox
                setPropDist={setDistances}
                setComsumption={setComsumption}
              />
              <h2>
                Gasto com Gasolina={formatValue((distances / comsumption) * 7)}
              </h2>
            </div>
            <h1 style={{ marginTop: '50px' }}>Diário de Bordo</h1>
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
