import styled from 'styled-components'

export const BoxTravel = styled.div`
  margin: 20px;
  grid-area: boxTravel;
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const TravelNew = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  margin: 5px;
  padding-left: 5px;
  border: 1px solid white;
  height: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25);
`

export const Travel = styled.div`
  background: white;
  width: 100%;
  margin: 5px;
  padding-left: 5px;
  padding-top: 5px;
  border: 1px solid white;
  height: 400px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25);
`

export const BoxInfo = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  margin: 20px;
  border: 1px solid white;
  height: 400px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25);
  grid-area: boxInfo;
`
export const BoxImage = styled.div`
  width: 70%;
  height: 150px;
  border-radius: 10px;
  background: url('img/cachoeira.jpg');
  background-size: cover;
`
