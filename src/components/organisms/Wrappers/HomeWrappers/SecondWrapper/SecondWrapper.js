import React from 'react';
import styled from 'styled-components';
import Button from '../../../../atoms/ButtonV2/Buttonv2'

const StyledWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    min-height: 400px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    display: grid;
    max-height: 1000px;
    background-color: rgb(245, 245, 245);
    gap: 10px;
`;

const FirstStyledArticle = styled.article`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;

`
const SecondStyledArticle = styled.article`
    grid-auto-rows: 80px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    place-items: center;
    color: rgb(23, 23, 23);
    place-content: start;
    justify-items: start;
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
`
const StyledParagraph = styled.p`
    font-size: 1.2rem;
    max-width: 80vw;
    font-family: Inter, sans-serif;
    font-weight: 300;
    margin-bottom: 8px;

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
`

const SecondWrapper = () => (   
        <StyledWrapper>


            <FirstStyledArticle>
                <div><StyledHeader>Why choose us?</StyledHeader></div>
                <div><StyledParagraph>Reprehenderit do nulla culpa duis excepteur.</StyledParagraph></div>
                <Button></Button>

            </FirstStyledArticle>


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
   
   );

export default SecondWrapper;