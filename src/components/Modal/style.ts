import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background: #f0f2f5;
  padding: 2.4rem;
  border-radius: 0.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const XButton = styled.button`
  margin-left: 90%;
`

export const Tittle = styled.div`
  font-size: 28px;
`

export const FormContainer = styled.form`
  max-width: 500px;
`
