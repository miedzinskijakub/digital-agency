import React from 'react';
import styled from 'styled-components';
import {animateScroll as scroll } from "react-scroll";
import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

  const scrollToBottom = () => {
    scroll.scrollToBottom(); 
};



const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    flex-direction: column;
    background-color: white;
    transform: translate(${({isOpen}) => isOpen ? '0' : '100%'});
    transition: transform .25s ease-in-out;

`;

const MenuLink = styled.p`
    color: #2F2E2E;
    font-size: 2.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-top: 40px;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: opacity .25s .20s ease-in-out;

    ${({theme}) => theme.mq.desktop}{
        font-size: 4rem;
}
${({theme}) => theme.mq.tablet}{
    margin-top: 60px;
    font-size: 4rem;
    }
`;



const menuItems = [
    <HashLink to="/#top">Home</HashLink>,
    <HashLink to="/projects">cipa</HashLink>,
    
    <Link to="/projects">Contacts</Link>,
];


const MobileMenu = ({isOpen, toogle}) => (
    
   
    <StyledWrapper isOpen={isOpen}>
        {menuItems.map( item, index => (
        <MenuLink key={index} isOpen={isOpen}
          onClick={toogle}>{item}</MenuLink>
        ))}
    </StyledWrapper>
   
);

export default MobileMenu;