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
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
`
export const ContainerFlexIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  justify-content: space-between;

  img {
    margin-bottom: 13px;
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`
