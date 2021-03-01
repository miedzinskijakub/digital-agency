import React, { useState } from 'react';
import styled from 'styled-components'
import Hamburger from '../../atoms/Hamburger/Hamburger'
import MobileMenu from '../../molecules/MobileMenu/MobileMenu'

const StyledWrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5px 35px;
    display: flex;
    width: 100vw;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    z-index: 9999;  
    ${({ theme }) => theme.mq.tablet}{
        align-items: center;

        svg{
            font-size: 30px;
        }
    }
    ${({ theme }) => theme.mq.desktop}{
        svg{
            font-size: 25px;
        }
}
${({ theme }) => theme.mq.huge}{
    svg{
        font-size: 40px;
    }

}
    `;

const StyledLogo = styled.span`
text-transform: lowercase;
font-family: Inter, sans-serif;
font-size: 1rem;
font-weight: 700;
`
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = () => {

    const [isMenuOpen, setMenuState] = useState(false);


    const toggleMobileMenu = () => {
        setMenuState(!isMenuOpen);
    }


    return (
        <StyledWrapper>
            <a href="/"><StyledLogo>Digital Agency</StyledLogo></a>
            <StyledNav>
                <MobileMenu toogle={toggleMobileMenu} isOpen={isMenuOpen} />
                <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
            </StyledNav>
        </StyledWrapper>
    )
};

export default Header;