import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 65px;
    height: 20px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white;
    cursor: pointer;
    text-transform: lowercase;
    outline: none;
    ::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        transform: translate(-10px, 10px);
        z-index: -1;
    }
`

const Button = () =>(
    <>
  <StyledButton>
      siema
  </StyledButton>
    </>
)


export default Button;