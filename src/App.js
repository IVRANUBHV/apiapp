import logo from './logo.svg';
import './App.css';

function App() {
  const sendApiCall = () => {
    console.log("MADE API CALL2");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendApiCall}>Send API Call</button>
      </header>
    </div>
  );
}

export default App;
