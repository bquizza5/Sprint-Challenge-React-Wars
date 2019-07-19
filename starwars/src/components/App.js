import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from './appcard'
import { GetData } from "./data"

import '../App.css';

export const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // const [personName, setPersonName] = useState()
  // const [personEye_color, setPersonEye_color] = useState()
  // const [personList, setPersonList] = useState()
  // const [personName, setPersonName] = useState()
  // const [personName, setPersonName] = useState()
  // const [personName, setPersonName] = useState()

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <GetData />
    </div>
  );
}

export default App;
