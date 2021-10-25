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
  grid-template-rows: 20% 80%;
  grid-template-areas:
    'header header'
    'boxTravel boxInfo';
`
