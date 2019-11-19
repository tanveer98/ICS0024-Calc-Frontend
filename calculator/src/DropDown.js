import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InputField from "./InputField";
import Axios from "axios";

export default SplitButton;

const calcType_api = ["ALL", "TEAM_2", "TEAM_6", "TEAM_7", "TEAM_8"];
const calcType_ui = ["All Teams", "Team 2", "Team 6", "Team 7", "Team 8"];


function SplitButton(props)
{
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const buttonClickHandler = () => {
        console.log(`You clicked ${calcType_ui[selectedIndex]}`);
        let calValues = props.inArray.values;
        let calType = calcType_api[selectedIndex];
        let queryString = "http://13.48.59.179:8043/api/calculate?calculatorType=";
        queryString += calType;

        let valueString = ""
        calValues.forEach( (v) => {
            let value = v.value.toString();
            valueString += "&";
            valueString += "values=";
            valueString += value;
        });
        queryString += valueString;
        console.log(queryString);

        (async () => {
            const resp = await Axios.get(queryString);
            console.log(resp);
        })();

    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                    <Button onClick={buttonClickHandler}>{calcType_ui[selectedIndex]}</Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon/>
                    </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {calcType_ui.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                // disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={event => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
}