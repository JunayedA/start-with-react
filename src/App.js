import logo from './logo.svg';
import './App.css';

function App() {
  const nyoks = ['Rubel','Bapparaz','Koobor']
  return (
    <div className="App">
      <Friend phone="019838" address="Noakhali"></Friend>
      <Friend phone="017234345" address="Ongpur"></Friend>
      <Friend phone="016344345" address="Josor Road"></Friend>
      <Friend phone="015234234" address="Dhaka"></Friend>
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

function Friend(props){
  return (
    <div className="Me">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}
export default App;
