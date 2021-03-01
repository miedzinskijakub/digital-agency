import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
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
    margin: 10px 15px;
    ::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        transform: translate(-10px, 10px);
        transition: transform .3s ease-out 0s;

        z-index: -1;
    }
    &:hover{
        &:after{
            transform: translate(-7px, 7px);
    }
    }
`

const Button = ({children}) => (
    <>
        <StyledButton>
            <NavLink to={`/${children}`}>
                {children}
            </NavLink>
            
  </StyledButton>
    </>
)


export default Button;