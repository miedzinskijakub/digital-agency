import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';




const StyledWrapper = styled.footer`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
background-color: rgb(23, 23, 23);
place-content: center;
place-items: center;
padding: 8px;

${({ theme }) => theme.mq.tablet}{

 
  

}

${({ absolute }) =>
absolute &&
`
@media (min-height: 750px), (min-width: 1550px) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`}
`

const StyledLink = styled.a`
    display: none;

    ${({ theme }) => theme.mq.tablet}{

        
        display: inherit;

        text-decoration: none;
        color: rgb(245, 245, 245);
        font-size: 3rem;
        text-transform: lowercase;
        font-weight: 700;

    }
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0px;
    width: 200px;
`
const StyledHeading4 = styled.h4`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 8px;
    letter-spacing: 3px;
    font-size: cacl(1.6rem + 0.25vmax);
`
const StyledUL = styled.ul`
    list-style-type: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
`
const StyledLI = styled.li`
    align-self: flex-start;
    margin-bbottom: 4px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: calc(1rem + 0.25vmax);

    ${({ theme }) => theme.mq.tablet}{
     
        align-self: inherit;


    }

`
const SecondStyledArticle = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 80px;
    padding: 20px;
    gap: 20px;
    place-content: start;
    place-items: center;
    color: rgb(240, 240, 240);
    justify-items: start;

    
    ${({ theme }) => theme.mq.tablet}{
     
        place-content: center;
        justify-items: center;


    }

`
const Footer = () => {


    const { pathname } = useLocation();
    if (pathname === '/services' || pathname === '/projects') {

        console.log(pathname);

    }

    return (
        <StyledWrapper absolute={pathname.includes('/projects') ? true : false ||pathname.includes('/services') ? true : false }>
            <StyledLink>Digital Agency</StyledLink>
            <SecondStyledArticle>
                <StyledSection>
                    <StyledHeading4>Development</StyledHeading4>
                    <StyledUL>
                        <StyledLI>Mobile development</StyledLI>
                        <StyledLI>Web development</StyledLI>
                    </StyledUL>
                </StyledSection>
                <StyledSection>
                    <StyledHeading4>Business</StyledHeading4>
                    <StyledUL>
                        <StyledLI>Marketing</StyledLI>
                        <StyledLI>SEO</StyledLI>
                    </StyledUL>
                </StyledSection>
                <StyledSection>
                    <StyledHeading4>Design</StyledHeading4>
                    <StyledUL>
                        <StyledLI>UX Design</StyledLI>
                        <StyledLI>Branding</StyledLI>
                    </StyledUL>
                </StyledSection>

            </SecondStyledArticle>
        </StyledWrapper>

    )
};

export default Footer;