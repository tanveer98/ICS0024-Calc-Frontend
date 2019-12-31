import {Content} from './Content'
import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

export class Page extends React.Component {

    render() {
        return (
            <div className="StartPage">
                <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Calculator!
                        </Typography>
                    </Toolbar>
                </AppBar>

            <Content/>
            </div>
        )
    }
}