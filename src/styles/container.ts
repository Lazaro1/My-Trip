import styled from 'styled-components'

export const ContainerFlexRow = styled.div`
  display: flex;
  align-items: center;
`
export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 15% 85%;
  grid-template-areas:
    'header header'
    'boxTravel boxInfo';
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  grid-area: header;
  padding: 10px;
  border-bottom: 1px solid #1b98e0;
  background: #1b98e0;
`
export const ConteinerInput = styled.div`
  width: 85%;
  height: 10%;
  border: none;

  display: flex;
  align-items: center;

  background-color: #f2f2f2;
  border-radius: 20px;
  outline: none;
  margin-top: 2rem;
`
