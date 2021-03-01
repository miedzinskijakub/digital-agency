import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const StyledButton = styled.button`
    width: 130px;
    height: 25px;
    padding: 2px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 196, 183);
    font-size: 1rem;
    letter-spacing: 2px;
    outline: none;
    border: none;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    cursor: pointer;
 
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