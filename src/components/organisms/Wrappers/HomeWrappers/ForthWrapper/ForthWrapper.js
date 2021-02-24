import React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.article`
min-height: 250px;
padding: 20px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
margin-bottom: 20px;

${({ theme }) => theme.mq.tablet}{
    padding: 30px 0px;
    min-height: inherit;


}
`;

const StyledQuote = styled.q`
font-size: 1.6rem;
text-align: justify;
font-family: "Playfair Display", serif;
font-style: italic;
max-width: 400px;


${({ theme }) => theme.mq.tablet}{
    font-size: 2.1rem;


}

::after, ::before{
    content: open-quote;
}

`
const StyledHeading = styled.h1`
    max-width: 80vw;
    font-size: 2.1rem;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    color: black;
    z-index: 9999;
    margin-bottom: 8px;
    position: relative;

    ${({ theme }) => theme.mq.tablet}{
        font-size: calc(3rem + 0.25vmax);
        max-width: 350px;
    
    }

    ::before{
        content: "";
        position: absolute;
        width: 75%;
        height: 12px;
        background-color: rgb(182, 219, 188);
        top: 60%;
        z-index: -1;
        left: 5%;
    }
`

const ForthWrapper = () => (   
        <StyledWrapper>
            <StyledQuote>And, when you want something, all the universe conspires in helping you to achieve it</StyledQuote>     
            <StyledHeading>Paulo Coelho</StyledHeading>
        </StyledWrapper>
   
   );

export default ForthWrapper;