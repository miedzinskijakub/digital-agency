import React from 'react';
import styled from 'styled-components';
import Button from '../../../../atoms/Button/Button'
import Wall from '../../../../../assets/image/wall-large.jpg'

const StyledWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    display: grid;

    ${({theme}) => theme.mq.huge}{
        min-height: 500px;
    }
`;

const StyledArticle = styled.article`
    padding: 20px;
    margin-top: 70px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    ${({theme}) => theme.mq.desktop}{
        justify-content: center;
        align-items: flex-start;
        padding-left: 12vw;
        padding-right: 40px;
    }
    ${({ theme }) => theme.mq.huge}{
        width: 100%;
        align-items: flex-start;
        padding-left: 12vw;
        padding-right: 40px;
    
    }

`
const StyledHeader = styled.h1`
    max-width: 80vw;
    font-size: calc(2.1rem + 0.25vmax);
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    color: black;
    z-index: 9999;
    margin-bottom: 8px;
    line-height: 100%;

    ${({ theme }) => theme.mq.tablet}{
        font-size: calc(3rem + 0.25vmax);
        max-width: 70vw;
    
    }
    ${({ theme }) => theme.mq.full}{
        max-width: 400px;
    
    }
`
const StyledParagraph = styled.p`
    margin-bottom: 20px;
    font-size: 1.2rem;
    max-width: 80vw;
    font-family: Inter, sans-serif;
    font-weight: 400;

    ${({ theme }) => theme.mq.tablet}{
    
        width: 50vw;
        font-size: calc(1.2rem + 0.25vmax);
    
    }
    ${({theme}) => theme.mq.desktop}{
        width: 100%;

        font-size: calc(1.2rem + 0.25vmax);
    }

    ${({ theme }) => theme.mq.huge}{
        width: 100%;
        font-weight: 300;
        font-size: calc(1.2rem + 0.25vmax);
    
    }
`
const StyledButtonContainer = styled.div`
    display: flex;
    margin: 8px 8px 8px 8px;
`
const StyledBackground = styled.div`
    background-size: 103.51%;
    background-image: url(${Wall});
    background-position: 50% center;
    background-repeat: no-repeat;
    position: relative;
    transition: background-size 0s ease 0s;
    max-width: 100vw;
`

const FirstWrapper = () => (
   
        <StyledWrapper>
           <StyledArticle>
               <div><StyledHeader>Take your business to the next level</StyledHeader></div>
               <div><StyledParagraph>Sint nostrud ipsum ut consectetur magna cillum qui. Commodo cillum in aute magna aliquip in aliquip excepteur.</StyledParagraph></div>
                <StyledButtonContainer><Button></Button><Button></Button></StyledButtonContainer>

           </StyledArticle>
           <StyledBackground/>
        </StyledWrapper>
   
   );

export default FirstWrapper;