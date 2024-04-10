import './App.css';
import socket from "./server";
import Button from './components/Button';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("채팅방에서 사용할 이름을 입력하세요.");
    console.log("User: ", userName);

    socket.emit("login", userName, (res) => {
      // console.log("response: ", res);
      if(res?.ok) setUser(res.data);
    });
  };

  return (
    <div className="App">
      <Button>기본</Button>
      <Button $danger>위험</Button>
      <Button $accept>수락</Button>
      <Button $block>블락</Button>
    </div>
  );
}

export default App;
