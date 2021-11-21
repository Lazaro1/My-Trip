import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 45.9%;
  padding-top: 2%;
  padding-left: 5%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 800px) {
    align-items: center;
  }
`
export const LogoDisplayColumn = styled.img`
  height: 170px;
  display: none;
  @media (max-width: 800px) {
    display: unset;
  }
`

export const SubTitle = styled.span`
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  color: #3751fe;
  margin-bottom: 15px;
  @media (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`
export const Span = styled.span`
  margin-bottom: 7%;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: rgba(0, 0, 0, 0.61);
  font-style: normal;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 0;
  }
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media (max-width: 800px) {
    align-items: center;
  }
`

export const ContainerAction = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const ContainerRow = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.61);
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.61);
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const ButtonSingIn = styled.button`
  background: #0c31f1;
  width: 129px;
  height: 54px;
  margin-top: 3%;
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background: white;
    border: 2px solid #0c31f1;
    color: #0c31f1;
  }
  @media (max-width: 800px) {
    width: 320px;
    border-radius: 25px;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54.1%;
  height: 100%;
  background: #e5e5e5;
  @media (max-width: 800px) {
    display: none;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 81.49%;

  margin-bottom: 50px;
  margin-top: 41px;
`

export const ButtonSingUp = styled.button`
  width: 152px;
  height: 61px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0c31f1;
  box-sizing: border-box;
  background: #e5e5e5;

  font-family: Helvetica;
  color: #0c31f1;
  font-size: 36px;
  line-height: 41px;
  cursor: pointer;
  &:hover {
    background: #0c31f1;
    color: white;
  }
  @media (max-width: 800px) {
    width: 320px;
    border-radius: 25px;
  }
`

export const LogoImage = styled.img`
  width: 400px;
`
