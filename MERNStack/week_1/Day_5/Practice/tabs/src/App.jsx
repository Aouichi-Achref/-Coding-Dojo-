import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'

function App() {
  const tabs=["make you plan ","work on the plan","sleep","repeat...."]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tabs tabs={tabs}></Tabs>

    </div>
  );
}

export default App;
