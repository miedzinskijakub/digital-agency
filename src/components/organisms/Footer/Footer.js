import React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    position:relative;
    background-color: #E8E8E8;
    padding: 50px;
    text-align: center;
    
    ${({theme}) => theme.mq.tablet}{
        padding: 70px;

    }
`
const Information = styled.p`
    font-size: 1.4rem;
    margin-bottom: 10px;
    ${({theme}) => theme.mq.tablet}{
    font-size: 2rem;
    }
`

const Footer = () =>(

  
    <StyledWrapper>
        <p>COCTAIL BAR</p>
        <Information>VISIT US
        Lorem ipsum dolor
        Tel: 123-456-7890
        Open from 6pm to 2am
        WORK WITH US
        join our team at the bar
        Contact us at info@mysite.com
        </Information>   
        <span>The site is a fiction for a portfolio.
        The website was made by Jakub Miedziński.</span>
    </StyledWrapper>
    
    );
    
    export default Footer;