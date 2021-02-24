import React from 'react'
import styled from 'styled-components'
import {ReactComponent as CoffeMan} from '../../../../../assets/image/coffe.svg'


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


const SecondWrapper = () => (


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


)

export default SecondWrapper;