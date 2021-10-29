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
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71%;
`
export const BoxTravel = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  width: 83%;
  margin-top: 50px;
  padding: 30px;
  h2 {
    margin: 15px 0 15px;
  }
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
  height: 500px;
  background: white;
  border-radius: 15px;
  margin-top: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
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
