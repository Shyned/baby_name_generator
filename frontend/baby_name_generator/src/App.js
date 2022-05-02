import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import  RandomName from './components/random_name/random_name';

function App() {
  const [name,setName]=useState([]);

  useEffect(()=>{getName();
  },[])
  
async function getName(){
  let reponse = await axios.get("http://127.0.0.1:8000/");
  setName(reponse.data)
}


console.log(name.name)

  return (
    <section>
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
        <div>
          <RandomName name = {name}/>
        </div>
    </section>
  );
}

export default App;
