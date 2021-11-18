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
          <div>
            <label>Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição"
            />
          </div>
          <div>
            <label>Valor</label>
            <input
              type="number"
              name="amount"
              id="amount"
              step="0.01"
              placeholder="0,00"
            />
            <small>
              Use o sinal - (negativo) para despesas e , (vírgula) para casas
              decimais
            </small>
          </div>
          <div>
            <label>Data</label>
            <input type="date" name="date" id="date" />
          </div>

          <div>
            <a
              href="#"
              className="button cancel"
              onClick={() => closeModal(false)}
            >
              Cancelar
            </a>
            <button>Salvar</button>
          </div>
        </S.FormContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

export default ModalTable
