import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "../Button";
import InputField from "../InputField";

export default function (props) {
    let state = props.state;
    let response = state.api_response;
    let version = 0;
    if(state.api_options !== null) version = 1;
    if(state.api_response != null) version = 2;

    //initial version with no data fetched from the back end
    if(version === 0) {
        return (
            <Container maxWidth="lg">
                <h1> Hello world!</h1>
            </Container>
        );
    }
    //after initial render, ajax call was made to get list of api options. render this
    else if(version === 1) {
        console.log("version 1");
        return (
            <Container maxWidth="lg">
                <AppBar position="sticky">
                </AppBar>
                <h1> Hello world!</h1>
                <p> There are {state.option_count} calculators available! These are: </p>
                <Button options={state}/>
                <InputField outputArray = {state}/>
            </Container>
        );
    }
    //after the successful ajax call to server with a list of response
    else if(version ===2) {
        console.log("version 2");

        return (
            <Container maxWidth="lg">
                <AppBar position="sticky">
                </AppBar>
                <h1> Hello world!</h1>
                <p> There are {state.option_count} calculators available! These are: </p>
                <Button options={state}/>
                <InputField outputArray = {state}/>

                <h2> and your result is {response.squaredValue} </h2>
            </Container>
        );
    }
}