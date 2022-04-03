//Imports
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


//Created function to handle user input 
function CommentsForm({commentsForm}) {
    
    //Log'd component to indicate location in console.
    console.log('CommentsForm Component');

    //Created state variable to handle user input, set it's initial value.
    //Current state value held in redux store.
    const [commentsOption, setCommentsOption] = useState('');

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
            type:'SET_COMMENTS',
            payload: commentsOption           
        })
        //Onclick, push new location to useHistory, changed location.
        history.push('/reviewForm');
    }

    //Render return
    //User input form rendered from react UI to DOM.
    //Used OnSubmit and OnChange to handle button click and navigation change. 
    //Initial state value in redux store changed to user input. 
    return (
        <div>
            <p>Any comments you wanted to leave?</p>
            <form  id="commentSection" onSubmit={handleClick}>
            <div id="textArea">      
            <textarea rows="20" cols="75" value= {commentsOption} onChange={(event) => setCommentsOption(event.target.value)} className="size" type="text" placeholder="Comments" required/>
            </div>
            <button className="size" id="commentsBtn">NEXT</button>
            </form>
        </div>
    );
}

//Created export for component.
export default CommentsForm;