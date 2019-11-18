import React from 'react';
import './App.css';
import Submit from "./Submit"
import DropDown from "./DropDown";
import InputField from "./InputField"

function App()
{
  return (
    <div className="App">
        <p> Select which team you want to select! (by default it will calculate for all teams!) </p>
      <DropDown/>

      <InputField/>
    </div>
  );
}

export default App;
