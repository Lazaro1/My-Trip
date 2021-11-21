import styled from 'styled-components'

export const ContainerFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContainerFixedTop = styled.div`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
`
export const ContainerFlexIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  justify-content: space-between;

  img {
    margin-bottom: 13px;
    cursor: pointer;
  }
  strong {
    cursor: pointer;
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`
