import React from 'react';
import styled, { css } from 'styled-components';

const ListDiv = styled.div`
width: 100%;
height: 88%;
background-color: aliceblue;
`
const ChatList = ({ children }) => {


  return (
    <ListDiv>
      {children}
    </ListDiv>
  )
}

export default ChatList
