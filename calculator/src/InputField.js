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
        props.outputArray.update(val);
        console.log(props.outputArray.values);
    };

    const removeHandler = (i) => {
        console.log("remove");
        const val = [...formValues];
        val.splice(i,1);
        setFormValues(val);
        props.outputArray.update(val);
        console.log(props.outputArray.values);
    };

    const changeHandler = (i, event) => {
        console.log("change");
        const val = [...formValues];
        val[i].value = event.target.value;
        setFormValues(val);
        props.outputArray.update(val);
        console.log(props.outputArray.values);
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


// export class InputField extends React.Component
// {
//     // const [formValues, setFormValues] = useState([{value:null}]);
//     constructor() {
//         super(React);
//         this.formValues = [{value: null}];
//         this.setFormValues = this.setFormValues.bind(this);
//         this.addHandler = this.addHandler.bind(this);
//         this.removeHandler= this.removeHandler.bind(this);
//         this.changeHandler = this.changeHandler.bind(this);
//     }
//
//     setFormValues(arr) {
//         this.formValues = arr;
//     }
//
//     addHandler() {
//         const val = this.formValues;
//         console.log("add clicked?");
//         val.push({value: null});
//         this.setFormValues(val);
//     };
//
//     removeHandler(i) {
//         const val = [...this.formValues];
//         val.splice(i,1);
//         this.setFormValues(val);
//
//     };
//
//     changeHandler(i, event){
//         const val = [...this.formValues];
//         val[i].value = event.target.value;
//         this.setFormValues(val);
//     };
//     render() {
//         console.log(this);
//         return (
//             <div>
//                 <Fab color="primary" aria-label="add" onClick={this.addHandler}>
//                     <AddIcon/>
//                 </Fab>
//
//                 {this.formValues.map((field, idx) => {
//                     console.log("Wtf");
//                     console.log(this.formValues);
//                     return (
//                         <div key={`${field}-${idx}`}>
//                             <input
//                                 type="number"
//                                 value={field.value}
//                                 placeholder="Enter Value"
//                                 onChange={e => this.changeHandler(idx, e)}
//                             />
//                             <button type="button" onClick={() => this.removeHandler(idx)}>
//                                 X
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//
//     };
//}