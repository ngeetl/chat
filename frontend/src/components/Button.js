import React from 'react';
import styled, { css } from 'styled-components';

const MyButton = styled.button`
    background-color: white;
    color: gray;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px;
    border: solid 1px gray;

    ${(p) => p.danger && css`
        background-color: red;
        color: white;
    `}
    ${(p) => p.accept && css`
        background-color: blue;
        color: white;
    `}
    ${(p) => p.block && css`
        background-color: gray;
        color: white;
    `}
`

const Button = ({ children, ...props }) => {


  return (
    <MyButton {...props}>{children}</MyButton>
  )
}

export default Button
