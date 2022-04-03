//Imports
import {useHistory} from 'react-router-dom';

//Created function to handle user input
function ThankYouForm() {

    //Used history to handle programmatic view change. 
    const history = useHistory()

    //Created function to handle Submit.
    //Click will change navigation and submit user input to be displayed to the DOM.
    const handleSubmit = (event) => {
        // event.preventDefault();
        
        //Log'd component to indicate location in console.
        console.log('In ThankYou Form');
        //Log'd to indicate location in console.
        console.log('Started new Feedback!');
        //Onclick, push new location to useHistory, changed location.
        history.push('/');
    }

    //Render return
    //User input form rendered from react UI to DOM.
    //Used onClick to handle button submit and navigation change. 
    //Current state value in redux store changed to user input, displayed on DOM.
    return (

        <div>
          <h1>Thank You!</h1>
        <button className="size" onClick={handleSubmit} type="submit">Start New Feedback</button>
        </div>
        
    )
}

//Created export for component.
export default ThankYouForm;