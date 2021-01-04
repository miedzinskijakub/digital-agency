import React from 'react';
import styled from 'styled-components';
import Button from '../../../../atoms/Button/Button'

const StyledWrapper = styled.section`
    margin-top: 70px;
    width: 100vw;
    height: 100vh;
    
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    display: grid;
    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
    @media (max-width: 700px), (orientation: landscape) {
        min-height: 500px;
    }
`;


const FirstWrapper = () => (
   
        <StyledWrapper>
           hej
           <Button/>
        </StyledWrapper>
   
   );

export default FirstWrapper;