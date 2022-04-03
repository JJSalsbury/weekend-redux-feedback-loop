//Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


//Created function to handle user input 
function SupportForm({supportForm}) {

    //Log'd to indicate location in console.
    console.log('In SupportForm Component');

    //Created state variable to handle user input, set it's initial value.
    //Current state value held in redux store.
    const [supportOption, setSupportOption] = useState(0);

    //Used dispatch to set communication between react and redux store and dispatch actions.
    const dispatch = useDispatch();

    //Used history to handle programmatic view change.
    const history = useHistory()

    //Created function to handle click.
    //Click will change navigation and submit user input through dispatch.
    const handleClick = (event) => {
        event.preventDefault();
        //Log'd component to indicate location in console.
        console.log('Changed page to:');
        //dispatch action type for reducer to run, and payload (user input in state).
        dispatch({
            type:'SET_SUPPORT',
            payload: supportOption
        })
        //Onclick, push new location to useHistory, changed location.
        history.push('/commentsForm');
    }

    //Render return
    //User input form rendered from react UI to DOM.
    //Used OnSubmit and OnChange to handle button click and navigation change. 
    //Initial state value in redux store changed to user input. 
    return (
        <div>
        <p>How well are you being supported?</p>
        <form  onSubmit={handleClick}>      
        <input onChange={event => setSupportOption(event.target.value)} className="size" min={1} max={5} required value= {supportOption}  type="number" required/>
        <button  className="size">NEXT</button>
        </form>  
    </div>
    );

}

//Created export for component.
export default SupportForm;