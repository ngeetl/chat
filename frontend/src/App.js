import './App.css';
import socket from "./server";
import Button from './components/Button';

function App() {

  return (
    <div className="App">
      <Button>기본</Button>
      <Button danger>위험</Button>
      <Button accept>수락</Button>
      <Button block>블락</Button>
    </div>
  );
}

export default App;
