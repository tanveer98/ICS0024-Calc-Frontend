import React from 'react';
import './App.css';
import  {Page} from './scripts/Display-Components/Page'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
function App(props) {

    return (
        <div className="App">
            <Page/>
        </div>
    );
}

export default App;
