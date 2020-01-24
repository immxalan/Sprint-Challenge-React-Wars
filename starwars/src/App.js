import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardsList from './components/CardsList';
import './App.css';
import logo from "./StarWarsLogo.png";


const App = () => {
  const [characterArray, setCharacter] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("Error has occurred", error);
      }) 
  }, []);

  return (
    <div className="App">
      <img src={logo}alt="logo"/>
      <CardsList characterArray={characterArray}/>
    </div>
  );
}

export default App;