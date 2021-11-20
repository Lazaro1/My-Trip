import styled from 'styled-components'

export const ContainerFeed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: #e5e5e5;

  width: 100%;
`
export const ContainerFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 81px;
  background: #e5e5e5;
  align-items: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71%;
  @media (max-width: 800px) {
    width: 100%;
  }
`
export const BoxTravel = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  width: 83%;
  margin-top: 30px;
  padding: 30px;
  h2 {
    margin: 15px 0 15px;
  }
`
export const TravelImg = styled.img`
  height: 400px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`

export const ContainerIconAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  img {
    cursor: pointer;
  }
`

export const ContainerComent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  img {
    border-radius: 100%;

    object-fit: cover;
    object-position: center;
    overflow: hidden;

    margin-right: 15px;
    height: 40px;
    width: 40px;
  }
`

export const BoxInput = styled.input`
  width: 82%;
  border-radius: 8px;
  border: 2px solid #e5e5e5;
  padding: 4px;
`

export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29%;
  align-items: flex-start;
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
  height: 25px;
  width: 80%;
  background: #3751fe;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    width: 82%;
    height: 28px;
    font-size: 15px;
  }
`
