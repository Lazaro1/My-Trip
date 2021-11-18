import * as S from './style'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ModalTable: React.FC = ({ closeModal }) => {
  const route = useRouter()
  const [description, setDescription] = useState('')

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
          />

          <input
            type="number"
            name="amount"
            id="amount"
            step="0.01"
            placeholder="Valor(0,00)"
          />

          <input type="date" name="date" id="date" />

          <S.FormaAtions>
            <a
              href="#"
              className="button cancel"
              onClick={() => closeModal(false)}
            >
              Cancelar
            </a>
            <button>Salvar</button>
          </S.FormaAtions>
        </S.FormContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

export default ModalTable
