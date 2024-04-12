import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ChatList from './ChatList';

const ChatDiv = styled.div`
    background-color: skyblue;
    width: 90%;
    height: 600px;
    margin: auto;
`

const Window = ({ message, setMessage, sendMessage, children }) => {

    return (
        <ChatDiv>
            <ChatList>
                {children}
            </ChatList>
            <div>
                <form onSubmit={sendMessage}>
                    <input
                        type='text'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type='submit'>전송</button>
                </form>
            </div>
        </ChatDiv>
    )
}

export default Window
