import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45.9%;
  padding-top: 2%;
  padding-left: 5%;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.span`
  font-size: 72px;
  line-height: 84.38px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #3751fe;
  margin-bottom: 46px;
`

export const SubTitle = styled.span`
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  color: #3751fe;
  margin-bottom: 15px;
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
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const InputZone = styled.div`
  width: 87%;
  height: 70px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #ffffff;
  border: 2px solid #c1bbbb;

  &:hover {
    border-left: 4px solid blue;
  }
`

export const ContainerRow = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.61);
  label {
    margin-left: 5px;
  }
  a {
    margin-left: 36%;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.61);
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
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54.1%;
  height: 100%;
  background: #e5e5e5;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 81.49%;

  margin-bottom: 191px;
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
`

export const LogoImage = styled.img`
  width: 150px;
`
