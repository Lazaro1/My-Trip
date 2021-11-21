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
    height: 150px;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`



export const IconMenu = styled.img`
  cursor: pointer;
  @media (max-width: 800px) {
    height: 100%;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f4f4f4;
  margin-left: 13.8%;
  width: 25.4%;
 @media(max-width: 900px){
  margin-left: 7.8%;
 }
 @media(max-width: 825px){
  display: none;
 }
 
`

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #f4f4f4;
  padding-left: 30px;
  cursor: pointer;
`
export const IconImage = styled.img`
  width: 36px;
  height: 36px;
`
export const Input = styled.input`
  outline: none;
  border: none;
  margin: 0px 0px 6px 27px;

  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  line-height: 21.09px;
  font-family: 'Roboto', sans-serif;
  color: #3751fe;
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
    @media(max-width:825px){
      display: none;
    }
  }
`
