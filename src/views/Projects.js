import React from 'react';
import styled from 'styled-components';
import FirstPug from '../assets/image/first_pug.jpg'
import SecondPug from '../assets/image/second_pug.jpg'
import ThirdPug from '../assets/image/third_pug.jpg'

const StyledWrapper = styled.div`
  margin-top: 70px;

  ${({ theme }) => theme.mq.desktop}{
  
    width: 100vw;
    min-height: 600px;
    height: auto;
    background-color: white;
    margin-bottom: 24px;
    position: relative;

  }
`

const StyledHeadingWrapper = styled.div`
${({ theme }) => theme.mq.desktop}{
  
  position: absolute;
  top: 10%;
  left: 15%;

}
`

const StyledHeading = styled.h1`

`

const StyledProjectWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
flex-wrap: wrap;

${({ theme }) => theme.mq.desktop}{
  
  

}
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

${({ theme }) => theme.mq.desktop}{
  
  align-self: flex-end;
  width: 300px;
  height: 70vh;
  max-height: 500px;

}
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