import * as S from './style'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ModalTable: React.FC = ({ closeModal }) => {
  const route = useRouter()
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')

  const SetValues = () => {
    console.log(description)
    console.log(value)
    console.log(date)
  }

  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.XButton onClick={() => closeModal(false)}>X</S.XButton>
        <S.Tittle>Novo Gasto</S.Tittle>
        <S.FormContainer>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            name="amount"
            id="amount"
            step="0.01"
            placeholder="Valor(0,00)"
            onChange={(e) => setValue(e.target.value)}
          />

          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <S.FormaAtions>
            <a
              href="#"
              className="button cancel"
              onClick={() => closeModal(false)}
            >
              Cancelar
            </a>
            <button
              onClick={() => {
                SetValues()
              }}
            >
              Salvar
            </button>
          </S.FormaAtions>
        </S.FormContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

export default ModalTable

export const TravelExpense = [
  {
    id: 1,
    description: 'Hotel',
    value: '150,00',
    date: '17/11/2021'
  },
  {
    id: 2,
    description: 'Passeio lancha',
    value: '250,00',
    date: '17/11/2021'
  },
  {
    id: 3,
    description: 'Jantar',
    value: '60,00',
    date: '17/11/2021'
  }
]
