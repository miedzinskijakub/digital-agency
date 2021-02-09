import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
height: auto;
margin-top: 96px;
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`

const StyledHeader = styled.div`
  margin: 0px;
  text-align: center;
  width: 100vw;
`
const StyledHeading = styled.h2`
  text-align: center;
  font-size: 2.1rem;
  text-transform: uppercase;
  letter-spacing: 1rem;

`
const StyledNav = styled.nav`
  width: 50vw;
  height: 48px;
  align-self: center;
  margin: 32px auto 0px;
`
const StyledUl = styled.ul`
  list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-content: center;
    height: 100%;
    gap: 40px;
`
const StyledLink = styled.a`
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
`

const StyledSection = styled.div`
    margin-top: 4px;
    width: 100vw;
    margin-bottom: 64px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`

const StyledChange = styled.section`
margin-top: 4px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
`
const Heading = styled.h1`
max-width: 80vw;
    font-size: 2.1rem;
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    transition: all 0.2s linear 0s;
    color: black;
    margin-bottom: 8px;
    position: relative;

    ::before{
    content: "";
    position: absolute;
    width: 75%;
    height: 12px;
    background-color: lightcyan;
    top: 60%;
    z-index: -1;
    left: 5%;
    }
`

const Tiles = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const StyledTiles = styled.div`
width: 200px;
height: 48px;
background-color: rgb(206, 211, 220);
border: 4px solid rgb(176, 184, 199);
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
margin: 0px 8px 8px 0px;
`

const Description = styled.div`

`
const DescParagraph = styled.p`
font-size: calc(1.2rem + 0.25vmax);
max-width: 70vw;
    text-align: justify;
    color: rgb(90, 90, 90);
    font-family: Inter, sans-serif;
    font-weight: 300;
    margin-bottom: 8px;
`

const Services = () =>(
  <StyledContainer>
  <StyledHeader><StyledHeading>SERVICES</StyledHeading></StyledHeader>
  <StyledNav>
    <StyledUl>
        <li><StyledLink>DESIGN</StyledLink></li>
        <li><StyledLink>DEVELOPMENT</StyledLink></li>
        <li><StyledLink>BUSINESS</StyledLink></li>
    </StyledUl>

  </StyledNav>
  <StyledSection>
    
    <StyledChange>

      <Heading>Desing</Heading>
      <Tiles>
        <StyledTiles>UI Design</StyledTiles>
        <StyledTiles>UX Design</StyledTiles>
        <StyledTiles>Branding</StyledTiles>

      </Tiles>

    <Description><DescParagraph>Ea mollit labore cillum est esse ea est id in labore esse. Irure quis consectetur consectetur do mollit qui labore sit cupidatat amet nulla aute occaecat ea. Aliquip officia nisi in id velit reprehenderit labore sunt velit quis ad consectetur dolor.</DescParagraph></Description>

    </StyledChange>

  </StyledSection>
  </StyledContainer>
)


export default Services;