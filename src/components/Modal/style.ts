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
  width: 40%;
  background: #f0f2f5;
  padding: 2.4rem;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    height: 30px;
    width: 100%;
    border: none;
    margin: 5px 0 5px 0;
    padding-left: 10px;
  }
`

export const XButton = styled.button`
  margin-left: 90%;

  text-align: center;
  padding: 5px;

  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`

export const Tittle = styled.div`
  font-size: 28px;
`

export const FormContainer = styled.form`
  width: 100%;
`

export const FormaAtions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 10px 0;
  a {
    width: 30%;
    padding: 10px;
    background-color: red;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    color: white;
  }
  button{
    width: 30%;
    padding: 10px;
    background-color: green;
    border-radius: 5px;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
  }
`
