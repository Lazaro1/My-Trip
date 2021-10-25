import styled from 'styled-components'

export const ButtonLogin = styled.button`
  width: 85%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
`

export const Buttonpurple = styled.button`
  background-color: color;
  cursor: pointer;
  width: 85%;
  height: 10%;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 1.25rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ffffff;
  background: ${(props) => (props.color ? props.color : '#6C63FF')};
`
