import React from 'react';
import styled from 'styled-components';
import Button from '../../../../atoms/Button/Button'
import FirstPug from '../../../../../assets/image/first_pug.jpg'
import SecondPug from '../../../../../assets/image/second_pug.jpg'
import ThirdPug from '../../../../../assets/image/third_pug.jpg'
import Fade from 'react-reveal/Fade';


const StyledWrapper = styled.section`
width: 100%;
max-width: 100vw;
height: 100%;
min-height: 605px;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

   
${({ theme }) => theme.mq.tablet}{
    padding: 20px;


}
`;

const StyledArticle = styled.article`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: 0px 10px;
width: 100%;
max-width: 100vw;

`
const StyledHeading = styled.h1`
    margin: 0px;
    max-width: 80vw;
    font-size: calc(1.2rem + 0.25vmax);
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    transition: all 0.2s linear 0s;
    color: black;
    z-index: 9999;
    line-height: 100%;
    
    
    ${({ theme }) => theme.mq.tablet}{
        font-size: calc(2.1rem + 0.25vmax);

    
    }
`

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    height: 70%;
    max-height: 100vh;

`

const StyledImage = styled.img`
    width: 80vw;
    height: 150px;
    object-position: center center;
    object-fit: cover;
    margin: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.3s ease-out 0s;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`

const ThirdWrapper = () => (   
        <StyledWrapper>
            <StyledArticle>
                <Fade bottom>
                    <StyledHeading>Check our projects</StyledHeading>
                </Fade>
                <Button>projects</Button>

                </StyledArticle>


            <StyledImageContainer>
                <a href="/"><StyledImage src={FirstPug}></StyledImage></a>
                <a href="/"><StyledImage src={SecondPug}></StyledImage></a>
                <a href="/"><StyledImage src={ThirdPug}></StyledImage></a>

            </StyledImageContainer>
         


        </StyledWrapper>
   
   );

export default ThirdWrapper;