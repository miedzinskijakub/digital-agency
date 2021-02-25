import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
border: none;
height: calc(80vh - 70px);
width: 100vw;
    margin-top: 70px;
    min-height: 380px;
    overflow: hidden;
    position: relative;
    display: grid;
    padding: 1rem;
    grid-template-columns: 4fr 5fr;
    ${({ theme }) => theme.mq.tablet}{
   
      border: 40px solid rgb(23, 23, 23);


  }
  ${({ theme }) => theme.mq.tablet}{
   
    height: calc(100vh - 70px);



}
`
const StyledForm = styled.div`
grid-column: 1 / 3;
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: center;

`
const StyledHeading = styled.h1`
font-size: 3rem;
letter-spacing: 4px;
max-width: 80vw;
font-family: Roboto, sans-serif;
transition: all 0.2s linear 0s;
    color: black;
    z-index: 9999;
    margin-bottom: 8px;
    line-height: 100%;

    ${({ theme }) => theme.mq.tablet}{
   
      letter-spacing: 0;
      font-size: 4rem;

    }

`
const StyledInputsForm = styled.form`
padding: 1rem;
display: flex;
flex-direction: column;

${({ theme }) => theme.mq.tablet}{
   
  min-width: 400px;

}
`
const StyledInput = styled.input`
height: 32px;
font-family: Roboto, sans-serif;
    font-size: 1rem;
    border: 1px solid black;
    width: 100%;
    outline: none;
    padding: 16px;
    cursor: pointer;
    margin: 8px 0px;
    display: block;
    position: relative;
    appearance: none;

    ${({ theme }) => theme.mq.tablet}{
   
      height: 40px;
    
    }
`
const StyledTextArea = styled.textarea`
height: 80px;
font-family: Roboto, sans-serif;
    font-size: 1rem;
    border: 1px solid black;
    width: 100%;
    outline: none;
    padding: 16px;
    cursor: pointer;
    margin: 8px 0px;
    display: block;
    position: relative;
    resize: none;
    appearance: none;

    ${({ theme }) => theme.mq.tablet}{
   
      height: 96px;
    
    }
`
const Terms = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 15px;

`
const StyledTermsP = styled.p`
font-size: 1rem;
`
const StyledButton = styled.button`
width: 72px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
background: transparent;
font-weight: 400;
outline: none;
cursor: pointer;
padding: 12px 8px;
align-self: flex-end;
`
const StyledLabel = styled.label`
width: 16px;
height: 16px;
background: transparent;
border: 0.5px solid black;
margin-right: 5px;
cursor: pointer;
position: relative;
::before{
  content: "";
  position: absolute;
  width: 100%;
  transition: height 0.3s ease 0s;
  height: 0%;
  background-color: black;
  bottom: 0px;
}
`

const Contact = () =>(
  <StyledContainer>
    <StyledForm>
      <div><StyledHeading>Contact with us</StyledHeading></div>
        <StyledInputsForm>
          <StyledInput placeholder="your name"></StyledInput>
          <StyledInput placeholder="your email"></StyledInput>
          <StyledTextArea placeholder="your message"></StyledTextArea>
        <Terms>
          <StyledLabel></StyledLabel>
          <StyledTermsP>I agree to The Terms of Service and Privacy Policy</StyledTermsP>
          </Terms>
        <StyledButton>send</StyledButton>
        </StyledInputsForm>
    </StyledForm>
  </StyledContainer>
)


export default Contact;