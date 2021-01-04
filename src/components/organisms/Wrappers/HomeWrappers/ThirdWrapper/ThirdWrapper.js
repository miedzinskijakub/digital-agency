import React from 'react';
import styled from 'styled-components';
import Button from '../../../../atoms/Button/Button'
import FirstPug from '../../../../../assets/image/first_pug.jpg'
import SecondPug from '../../../../../assets/image/second_pug.jpg'
import ThirdPug from '../../../../../assets/image/third_pug.jpg'


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
`;

const StyledArticle = styled.article`
margin-top: 10px;
display: flex;
flex-wrap: wrap;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
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
`

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
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
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.3s ease-out 0s;
    cursor: pointer;
`

const ThirdWrapper = () => (   
        <StyledWrapper>
            <StyledArticle>
                <div>
                    <StyledHeading>Check our projects</StyledHeading>
                </div>
                <Button/>

                </StyledArticle>


            <StyledImageContainer>
                <a><StyledImage src={FirstPug}></StyledImage></a>
                <a><StyledImage src={SecondPug}></StyledImage></a>
                <a><StyledImage src={ThirdPug}></StyledImage></a>

            </StyledImageContainer>
         


        </StyledWrapper>
   
   );

export default ThirdWrapper;