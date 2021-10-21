/* eslint-disable */
import styled from 'styled-components'

export const LoginBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
export const LoginBackground = styled.div`
  width: 50%;
  height: 100%;
  background-color: #E0DCDC;
  
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 66%;

  }
`


export const LoginForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
export const LoginTitle = styled.div`
    width: 100%;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #6C63FF;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    margin-left: 12rem;
    margin-top: 2.5rem;
    font-height: 900;
    

`

export const LoginSpan = styled.span`
    margin-bottom: 1.5rem;
    color: black;
    
    
`
export const LoginH1 = styled.h1`

    font-size:3rem;
    color: #6C63FF;
`

export const Separetor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  width: 100%;
  
`

export const SeparetorLine = styled.div`
  background: black;
  width: 100%;
  height: 1px;
  margin-left: 1rem;
  margin-right: 1rem;
`

export const Forgetpass = styled.a`
  color: rgba(0, 0, 0, 0.65);
  margin-top: 0.5rem;
  cursor: pointer;
`

export const CreateLogin = styled.a`
  display: flex;
  align-items: center;
  color: #3B33B3;
  cursor: pointer;
  p{
    color: black;
    margin-right: 5px;
  }
;
`
