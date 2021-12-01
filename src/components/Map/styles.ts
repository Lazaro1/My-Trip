import styled from 'styled-components'

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Map = styled.div`
  height: 100%;
  width: 100%;
`

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  label {
    font-size: 18px;
  }
`

export const BoxInput = styled.input`
  width: 13%;
  border-radius: 8px;
  border: 2px solid #e5e5e5;
  padding: 4px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`

export const ButtonExpense = styled.button`
  margin-top: 15px;
  width: 15%;
  background: white;
  border-radius: 25px;
  border: 1px solid #378fe9;
  color: #378fe9;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    animation-name: background-color;
    animation-duration: 150ms;
    /* Only change code below this line */
    animation-fill-mode: forwards;
    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: rgba(173, 216, 230, 0.3);
      border: 1px solid #3751fe;
    }
  }
`
