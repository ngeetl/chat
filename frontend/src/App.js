import './App.css';
import socket from "./server";
import Button from './components/Button';
import { useEffect, useState } from 'react';
import Window from './components/chat/Window';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    askUserName();
    socket.on('message', (message) => {
      console.log("res: ", message);
    })
  }, []);

  const askUserName = () => {
    const userName = prompt("채팅방에서 사용할 이름을 입력하세요.");
    console.log("User: ", userName);

    socket.emit("login", userName, (res) => {
      // console.log("response: ", res);
      if (res?.ok) setUser(res.data);
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message, async (res) => {
      console.log('sendmessage: ', res);
    })

  };

  return (
    <div className="App">
      <Window message={message} setMessage={setMessage} sendMessage={sendMessage} />
      <Button>기본</Button>
      <Button $danger>위험</Button>
      <Button $accept>수락</Button>
      <Button $block>블락</Button>
    </div>
  );
}

export default App;
