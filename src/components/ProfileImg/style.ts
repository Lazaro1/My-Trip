import styled from 'styled-components'

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  border-radius: 100%;
  font-size: 1.3rem;
  
  @media (max-width: 600px) {
  strong {
      display: none;
    }
  }
`


export const Profile = styled.img`
  border-radius: 100%;

  object-fit: cover;
  object-position: center;
  overflow: hidden;

  margin-right: 15px;
  margin-left: 15px;
  height: 52px;
  width: 52px;
  @media(max-width: 600px){
    height: 49px;
    width: 43px;
  }
`
