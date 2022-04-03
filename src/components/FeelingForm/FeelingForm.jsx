//Imports
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


//Created function to handle user input 
function FeelingForm({ feelingForm }) {

    //Log'd to indicate location in console.
    console.log('In new Feedback');
    //Log'd component to indicate location in console.
    console.log('In FeelingForm Component');

    //Created state variable to handle user input, set it's initial value.
    //Current state value held in redux store.
    const [feelingOption, setFeelingOption] = useState(0);

    //Used dispatch to set communication between react and redux store and dispatch actions.
    const dispatch = useDispatch();

    //Used history to handle programmatic view change. 
    const history = useHistory();

    //Created function to handle click.
    //Click will change navigation and submit user input through dispatch.
    const handleClick = (event) => {
        event.preventDefault();
        //Log'd component to show location transition in console.
        console.log('Changed page to:');
        //dispatch action type for reducer to run, and payload (user input in state). 
        dispatch({
            type: 'SET_FEELING',
            payload: feelingOption
        })
        //Onclick, push new location to useHistory, changed location.
        history.push('/understandingForm');
    }

    //Render return
    //User input form rendered from react UI to DOM.
    //Used OnSubmit and OnChange to handle button click and navigation change. 
    //Initial state value in redux store changed to user input. 
    return (

        <div>
            <p>How Are You Feeling Today?</p>
            <section>
                <form onSubmit={handleClick}>
                    <input onChange={event => setFeelingOption(event.target.value)} className="size" min={1} max={5} required value={feelingOption} type="number" />
                    <button className="size">NEXT</button>
                </form>
            </section>
        </div>
    )
}

//Created export for component.
export default FeelingForm;