import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel','Bapparaz','Koobor'];
  
  const cinemas =[
    {nayok:'Koober',nayika:'Kopila'},
    {nayok:'Rubel',nayika:'Moushumi'},
    {nayok:'Razzak',nayika:'Shabana'},
    {nayok:'Joshim',nayika:'Sucorita'},
  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="Jems bond" nayika="cat w"></Cinema> */}
      {
        cinemas.map(cinema =><Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}

function Me(props){
  console.log(props)
  const person = {
    backgroundColor:'skyblue',
    border:'3px solid lightsalmon',
    matgin:'20px',
    borderRadius:'20px'

  }
  return ( 
  <div style={person}>
    <h1>Name: {props.name}</h1>
    <h4>Profession: Nothing</h4>
  </div>
  );
}

function Cinema(props){
  return (
    <div className="Me">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(props){
  return (
    <div className="Me">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}
export default App;
