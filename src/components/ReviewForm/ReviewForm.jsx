//Imports
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


//Created function to handle user input 
function ReviewForm() {

    //Log'd component to indicate location in console.
    console.log('In FeelingForm Component');

    //Used history to handle programmatic view change. 
    const history = useHistory();

    //Redux state is an object with properties for each reducer.
    //Created variables and set them equal to the object property from the redux store.
    //Used selector to select and render redux state data to the DOM.
    const feelingForm = useSelector(store => store.setFeeling)
    const understandingForm = useSelector(store => store.setUnderstanding)
    const supportForm = useSelector(store => store.setSupport)
    const commentsForm = useSelector(store => store.setComments)

    //Created object and set property values to current redux state.
    const studentFeedback = {
        feeling: feelingForm,
        understanding: understandingForm,
        support: supportForm,
        comments: commentsForm
    }

    //Created function to handle Submit.
    //Click will change navigation and submit user input to be displayed to the DOM.
    const handleSubmit = () => {
        console.log('In reviewForm');
        //axios post to database with studentFeedback object
        axios.post('/feedback', studentFeedback)

            .then(response => {
                //Onclick, push new location to useHistory, changed location.
                history.push('/thanks');
                console.log('Ready to start new feedback');
            }).catch(err => {
                console.log(err);
            })
    }

    //Render return
    //User input form rendered from react UI to DOM.
    //Used onClick to handle button submit and navigation change. 
    //Current state value in redux store changed to user input, displayed on DOM.
    return (
        <>
            <div>
                <div id="feedbackReview">
                    <h1>Review Your Feedback</h1>
                    <div>Feeling: {feelingForm}</div>
                    <div>Understanding: {understandingForm}</div>
                    <div>Support: {supportForm}</div>
                    <div>Comments: {commentsForm}</div>
                </div>
                <button className="size" onClick={handleSubmit}>SUBMIT</button>
            </div>
        </>
    )
}

//Created export for component.
export default ReviewForm;
