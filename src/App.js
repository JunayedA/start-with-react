import logo from './logo.svg';
import './App.css';

function App() {
  const singer ={
    name:'mahfuz rahman',
    job:'singer'
  }

  const singerStyle={
    backgroundColor:'red',
    color:'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h3>Hi React</h3>
          <p style={singerStyle}>Singer name: {singer.name} {singer.job}</p>
          <p style={
            {
              backgroundColor:'#194d33',
              color:'white',
              fontSize:'24px'
            }
          }>Singer name: {singer.name} {singer.job}</p>
        </div>
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
      </header>
    </div>
  );
}

export default App;
