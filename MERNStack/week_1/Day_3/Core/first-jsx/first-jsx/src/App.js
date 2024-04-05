import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Dojo</h1>
        <h3>thigs to do </h3>
        <ul>
          <li>learn react </li>
          <li>Climb Mt.Everest</li>
          <li>free Palestine</li>
          <li>never snitch</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
