import React from 'react';
import './App.css';
import DropDown from "./DropDown";
import InputField from "./InputField"

function App(props) {
    let inputValues = {
        values: [],
        update(args) {
            this.values = [...args];
        }
    };

  return (
    <div className="App">
        <p> Select which team you want to select! (by default it will calculate for all teams!) </p>
      <DropDown inArray = {inputValues}/>

        <InputField outputArray={inputValues}/>
    </div>
  );
}

export default App;
