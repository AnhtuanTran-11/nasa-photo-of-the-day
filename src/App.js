import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from './Constants/deploy.js';
import Body from './Components/Body'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => { 
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      console.log(res.data);
      setNasaInfo(res.data);
    })
    .catch(err => {
      
    })
  }, [])

    console.log(nasaInfo)

  return (
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      <Header nasaInfo = {nasaInfo}/>
      <Body nasaInfo = {nasaInfo}/>
      <Footer nasaInfo = {nasaInfo}/>
    </div>
  );
}

export default App;
