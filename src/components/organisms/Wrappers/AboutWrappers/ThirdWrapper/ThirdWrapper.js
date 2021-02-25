import React from 'react';
import styled from 'styled-components';

const StyledFAQ = styled.div`
align-items: flex-start;
    padding: 16px;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${({ theme }) => theme.mq.tablet}{
   
        align-items: center;

    }
`
const StyledQuestions = styled.div`
background-color: transparent;
padding: 0px;
margin: 8px;
height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 16px;
    width: 80%;

    ${({ theme }) => theme.mq.tablet}{
   
        padding: 32px;
        margin: 32px 16px 64px;

    }
    ${({ theme }) => theme.mq.desktop}{
  
       background-color: rgb(248, 247, 251);
       
     }
`
const StyledSingle = styled.div`
margin-top: 24px;
margin: 0px 0px 40px;
display: grid;
    grid-template-columns: 1fr 10fr;
    grid-template-rows: repeat(2, 1fr);
    color: rgb(23, 23, 23);
    place-content: center;
    align-items: center;
    gap: 4px;

    ${({ theme }) => theme.mq.tablet}{
   
        margin-left: 40px;

    }
    ${({ theme }) => theme.mq.desktop}{
  
        background-color: rgb(248, 247, 251);
        
      }
`

const StyledPlus = styled.div`
transform: rotate(20deg);
    width: 20px;
    height: 20px;
    position: relative;
    transition: all 0.25s ease 0s;
    cursor: pointer;

    ${({ theme }) => theme.mq.tablet}{
   
        transform: rotate(0deg);


    }
    ::before, ::after{
      content: "";
    position: absolute;
    background-color: rgb(23, 23, 23);
    }
    ::before{
      left: 50%;
    width: 2px;
    transform: translateX(-50%);
    top: 4px;
    bottom: 4px;
    }
    ::after{top: 50%;
      left: 4px;
      right: 4px;
      height: 2px;
      transform: translateY(-50%);}
`
const StlyedBold = styled.div`
font-size: 1.2rem;
font-weight: 700;
${({ theme }) => theme.mq.tablet}{
   
    font-weight: 700;
    font-size: 1.6rem;


}
`
const StyledAnswer = styled.p`
transform: translate(0px, 20px);
opacity: 0;
visibility: hidden;
color: rgb(23, 23, 23);
font-size: 1rem;
padding: 5px;
grid-column: 2 / 3;
`


const ThirdWrapper = () => (

    <StyledFAQ>
      <h2>FAQ</h2>
      <StyledQuestions>
      <StyledSingle><StyledPlus/><StlyedBold>Thinking about starting a business?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>
      <StyledSingle><StyledPlus/><StlyedBold>What type of product we offer?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>
      <StyledSingle><StyledPlus/><StlyedBold>What exactly does DA mean?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>

      </StyledQuestions>
    </StyledFAQ>

)

export default ThirdWrapper