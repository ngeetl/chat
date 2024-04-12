import React from 'react';
import styled, { css } from 'styled-components';


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  overflow: auto;
  height: 95%; 
`

const MessageBubble = styled.div`
  background-color: ${props => {
    if(props.$isUser) return 'green'
    else if (!props.$isUser) return 'pink'
    else if (props.$isSystem) return 'gray' 
  } 
  };
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  max-width: 60%;
  margin-bottom: 8px;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  word-wrap: break-word;
`

const MessageContainer = ({ messageList, user }) => {

    return (
        <ChatContainer>
            {messageList?.map((message, idx) => {
                return (
                    <MessageBubble
                        key={idx}
                        $isUser={message.user.name === user.name}
                        // $isSystem={message.user.name === 'system'}
                    >
                    {message?.chat}
                    </MessageBubble>
                )
            })}
        </ChatContainer>
    )
}

export default MessageContainer
