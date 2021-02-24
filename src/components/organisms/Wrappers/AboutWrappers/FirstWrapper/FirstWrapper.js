import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ReactLogo} from '../../../../../assets/image/meeting.svg'
import {ReactComponent as Particle} from '../../../../../assets/image/particle.svg'

const StyledContainer = styled.div`
flex-direction: column;
width: 100vw;
min-height: 500px;
height: calc(100vh - 70px);
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
position: relative;

${({ theme }) => theme.mq.tablet}{
   
    flex-direction: row;

}
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

${({ theme }) => theme.mq.tablet}{
    margin-left: 0;
    margin-top: 0;
    align-self: inherit;

    font-size: 5rem;
    max-width: 350px;
    line-height: 40px;


}
`
const StyledMeeting = styled(ReactLogo)`
width: 60vw;
max-width: 320px;
    min-width: 250px;

    ${({ theme }) => theme.mq.tablet}{
        
    width: 30vw;
    
    }
`
const StyledParticles = styled(Particle)`
position: absolute;
z-index: 99999;

`

const StyledParagraph = styled.p`
    display: none;

    ${({ theme }) => theme.mq.tablet}{
        display: block;

        z-index: 999999;

        position: absolute;
        left: 0px;
        right: 0px;
        font-size: 1.2rem;
        letter-spacing: 20px;
        padding-left: 20px;
        margin-left: 20px;
        text-align: center;
        bottom: 20%;
    
    
    }

`

const FirstWrapper = () =>(


  <StyledContainer>

  <Styledh1>Think outside the box</Styledh1>
  <StyledParticles/>
  <StyledMeeting/>
  <StyledParagraph>studio de création</StyledParagraph>
  </StyledContainer>

)

export default FirstWrapper;