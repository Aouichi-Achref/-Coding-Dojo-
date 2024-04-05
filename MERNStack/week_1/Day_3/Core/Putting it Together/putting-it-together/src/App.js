import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personecard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          prop it up assignment 
        </p>
        <p>scroll down</p>
      </header>
      <PersonCard firstName={"doe"} lastName={"jane"} age={45} hairColor={"black"}/>
      <PersonCard firstName={"smith"} lastName={"john"} age={88} hairColor={"brown"}/>
      <PersonCard firstName={"atig"} lastName={"oussema"} age={25} hairColor={"brown"}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"brown"}/>
      <PersonCard firstName={"smith"} lastName={"Maria"} age={62} hairColor={"brown"}/>

    </div>
  );
}

export default App;
