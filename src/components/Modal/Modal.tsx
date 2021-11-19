import * as S from './style'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ModalTable: React.FC = ({ closeModal, setExpensesValue }) => {
  const route = useRouter()
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')

  const setValues = (e) => {
    e.preventDefault()
    setExpensesValue({
      description,
      value,
      date
    })
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
            placeholder="Valor (0,00)"
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
            <button onClick={setValues}>Salvar</button>
          </S.FormaAtions>
        </S.FormContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

export default ModalTable
