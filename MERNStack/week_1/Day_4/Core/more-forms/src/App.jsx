import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>scroll down </h1>
      </header>
      <FormComponent/>

    </div>
  );
}

export default App;
