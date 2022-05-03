import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import  RandomName from './components/random_name/random_name';
import './App.css';
import underline from './underline.jpg';

function App() {
  const [name,setName]=useState([]);

  useEffect(()=>{getName();
  },[])
  
async function getName(){
  let reponse = await axios.get("http://127.0.0.1:8000/");
  setName(reponse.data)
}




  return (
    <section className='body'>
      <header>
        <div className='name-split'>
          <h1>Baby Namer</h1>
        </div>
        <div className='title-name-flex'>
          <h1>Gene</h1>
          <h1 className='Giant-letter'>R</h1>
          <h1>tor</h1>
        </div>
      </header>
      <img src={underline}></img>
        <div>
          <RandomName name = {name}/>
        </div>
    </section>
  );
}

export default App;
