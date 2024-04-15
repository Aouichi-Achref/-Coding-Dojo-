import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'
import './components/tabsStyle.css';


function App() {
  const tabs=["make you plan ","work on the plan","sleep","repeat...."]

  return (
    <div >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tabs tabs={tabs}></Tabs>

    </div>
  );
}

export default App;
