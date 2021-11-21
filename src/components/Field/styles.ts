import styled from 'styled-components'

export const InputZone = styled.div`
  width: 65%;
  height: 70px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #ffffff;
  border: 2px solid #c1bbbb;

  &:hover {
    border-left: 4px solid blue;
  }
  @media (max-width: 800px) {
    width: 320px;
  }
`

export const InputLabel = styled.label`
  /* position: absolute; */
  margin: 12px 0px 6px 27px;
  margin-left: 27px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.61);
`

export const Input = styled.input`
  width: 80%;
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
