import styled from 'styled-components'

export const ContainerSideBar = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`

export const BoxInfoPerfil = styled.div`
  width: 70%;
  margin-top: 30px;
  padding-bottom: 15px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BoxInfoRigth = styled.div`
  width: 70%;
  margin-top: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 15px 0 15px 0;
  h2 {
    width: 80%;
    text-align: center;
    border-bottom: 2px solid #e5e5e5;
  }
  h3 {
    background: #e9f0f8;
    padding: 15px;
    border-radius: 5px;
    margin-top: 5px;
  }
`
export const BoxInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-top: 15px;
  p {
    margin-left: 10px;
  }
`

export const BackgroundPerfil = styled.img`
  width: 100%;
`

export const PerfilImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
  margin-top: -50px;
  border: 10px solid white;
`

export const ButtonNewTravel = styled.button`
  height: 30px;
  width: 80%;
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
      border: 2px solid #3751fe;
    }
  }
`
