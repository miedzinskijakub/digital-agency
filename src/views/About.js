import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ReactLogo} from '../assets/image/meeting.svg'
import {ReactComponent as Particle} from '../assets/image/particle.svg'
import {ReactComponent as CoffeMan} from '../assets/image/coffe.svg'

const StyledContainer = styled.div`
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 100vw;
min-height: 500px;
height: calc(100vh - 70px);
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
position: relative;
`
const Styledh1 = styled.h1`
font-size: 2.4rem;
align-self: flex-start;
margin-left: 20vw;
margin-top: 25px;
max-width: 150px;
line-height: 25px;
z-index: 999999;
color: rgb(29, 29, 31);
letter-spacing: 0px;
position: relative;
`
const StyledMeeting = styled(ReactLogo)`
width: 60vw;
max-width: 320px;
    min-width: 250px;

`
const StyledParticles = styled(Particle)`
position: absolute;
z-index: 99999;

`
const StyledSecondSection = styled.div`
width: 100vw;
height: calc(100vh - 70px);
min-height: 500px;
background-color: white;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-template-rows: repeat(2, 1fr);
padding: 8px;
place-content: center;
justify-items: center;
`

const StyledContCoffee = styled.div`
max-width: 80vw;
width: 400px;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
`
const StyledCoffeesvg = styled(CoffeMan)`
position: absolute;
width: 80%;
`

const StyledBox = styled.div`
width: 100%;
height: auto;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`

const StyledSection = styled.section`
max-width: 80vw;
width: 80%;
z-index: 999999;
box-shadow: rgb(173 173 173) 0px -2px 65px 8px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: auto;
background-color: rgb(23, 23, 23);
padding: 3rem 2rem;
border-radius: 1rem;
`
const StyledH1 = styled.h1`
font-family: Roboto, sans-serif;
color: rgb(240, 240, 240);
transition: all 0.2s linear 0s;
    text-transform: lowercase;
    font-size: 2.1rem;
    max-width: 80vw;
    z-index: 9999;
    margin-bottom: 8px;
    line-height: 100%;
`
const StyledParagraph = styled.p`
text-align: justify;
color: rgb(240, 240, 240);
max-width: 80vw;
font-family: Inter, sans-serif;
    font-weight: 300;
    margin-bottom: 8px;
`
const StyledButton = styled.button`
width: 130px;
height: 25px;
padding: 2px 20px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
background-color: rgb(103, 201, 240);
font-size: 1rem;
transition: all 0.3s ease-in 0s;
font-family: Roboto, sans-serif;
letter-spacing: 2px;
outline: none;
border: none;
font-weight: 700;
cursor: pointer;
`

const StyledFAQ = styled.div`
align-items: flex-start;
    padding: 16px;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
`
const StyledSingle = styled.div`
margin-top: 24px;
margin: 0px 0px 40px;
display: grid;
    grid-template-columns: 1fr 10fr;
    grid-template-rows: repeat(2, 1fr);
    color: rgb(23, 23, 23);
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
`

const StyledPlus = styled.div`
transform: rotate(20deg);
width: 20px;
    height: 20px;
    position: relative;
    transition: all 0.25s ease 0s;
    cursor: pointer;
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

const About = () =>(
  <>
  <StyledContainer>

  <Styledh1>Think outside the box</Styledh1>
  <StyledParticles/>
  <StyledMeeting/>
  </StyledContainer>

  <StyledSecondSection>
      <StyledContCoffee>
        <StyledCoffeesvg/>
      </StyledContCoffee>
  <StyledBox>
  <StyledSection>
      <div><StyledH1>article de presse</StyledH1></div>
      <div><StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</StyledParagraph></div>
      <StyledButton>projects</StyledButton>
  </StyledSection>
  </StyledBox>
  </StyledSecondSection>

    <StyledFAQ>
      <h2>FAQ</h2>
      <StyledQuestions>
      <StyledSingle><StyledPlus/><StlyedBold>Thinking about starting a business?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>
      <StyledSingle><StyledPlus/><StlyedBold>What type of product we offer?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>
      <StyledSingle><StyledPlus/><StlyedBold>What exactly does DA mean?</StlyedBold><StyledAnswer>Mollit consequat Lorem consectetur laborum laboris minim nulla Lorem aliqua aliquip esse labore incididunt sint.</StyledAnswer></StyledSingle>

      </StyledQuestions>
    </StyledFAQ>

  </>
)


export default About;