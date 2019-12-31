import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


export default FloatingActionButtons;
function FloatingActionButtons(props)
{
    const [formValues, setFormValues] = useState([{value:null}]);

    const addHandler = () => {
        console.log("add");
        const val = [...formValues];
        val.push({value: null});
        setFormValues(val);
        props.outputArray.update_user_input(val);
        console.log(props.outputArray.user_input);
    };

    const removeHandler = (i) => {
        console.log("remove");
        const val = [...formValues];
        val.splice(i,1);
        setFormValues(val);
        props.outputArray.update_user_input(val);
        console.log(props.outputArray.user_input);
    };

    const changeHandler = (i, event) => {
        console.log("change");
        const val = [...formValues];
        val[i].value = event.target.value;
        setFormValues(val);
        props.outputArray.update_user_input(val);
        console.log(props.outputArray.user_input);
    };

    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={addHandler}>
                <AddIcon />
            </Fab>
            {formValues.map((field, idx) => {
                console.log("wtf");
                return (
                    <div key={`${field}-${idx}`}>
                        <input
                            type="number"
                            value={field.value}
                            placeholder="Enter Value"
                            onChange={e => changeHandler(idx, e)}
                        />
                        <button type="button" onClick={() => removeHandler(idx)}>
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
