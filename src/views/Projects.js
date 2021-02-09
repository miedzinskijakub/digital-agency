import React from 'react';
import styled from 'styled-components';
import FirstPug from '../assets/image/first_pug.jpg'
import SecondPug from '../assets/image/second_pug.jpg'
import ThirdPug from '../assets/image/third_pug.jpg'

const StyledWrapper = styled.div`
  margin-top: 70px;
`

const StyledHeadingWrapper = styled.div`

`

const StyledHeading = styled.h1`

`

const StyledProjectWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
padding: 8px;
flex-wrap: wrap;
`

const StyledProject = styled.img`
transform: translateY(1.83735px);
width: 350px;
height: 250px;

object-position: center center;
object-fit: cover;
margin: 10px 15px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.7;
transition: all 0.3s ease-out 0s;
cursor: pointer;
`

const images = [
   {photo: FirstPug}, {photo: SecondPug}, {photo: ThirdPug}
]

const Projects = () =>(
  <>
    <StyledWrapper>
      <StyledHeadingWrapper>
        <StyledHeading>projects we made</StyledHeading>
        
      </StyledHeadingWrapper>

          <StyledProjectWrapper>
            {images.map(( e, id ) => (
              <StyledProject src={e.photo} key={id}></StyledProject>
            ))}

          </StyledProjectWrapper>

    </StyledWrapper>
  </>
)


export default Projects;