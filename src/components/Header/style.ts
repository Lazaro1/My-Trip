import styled from 'styled-components'

export const ContainerFixedTop = styled.div`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
`
export const ContainerLogo = styled.div`
  width: 130px;
  height: 80px;
  border-right: 1px solid #f4f4f4;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 50px;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
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

export const IconMenu = styled.img`
  margin-bottom: 13px;
  cursor: pointer;
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f4f4f4;
  margin-left: 13.8%;
  width: 25.4%;
`

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #f4f4f4;
  padding-left: 30px;
`
