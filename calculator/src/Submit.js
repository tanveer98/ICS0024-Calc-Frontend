import React,{ Component } from "react";
import Button from "@material-ui/core/Button";
// import { StyleSheet, View } from "react-native";
export default submitButton;

const buttonStyle = {

};

function eventHandler() {
    alert("Button clicked?");

}

function submitButton()
{
    // const classes = useStyles();
    return (
        /*<View style={buttonStyle.container}>*/
    <div className="swag" >
        <Button variant="outlined" color="primary" onClick={eventHandler} style={buttonStyle}>
            Enter?
        </Button>
    </div>
    // </View>

    );
}
