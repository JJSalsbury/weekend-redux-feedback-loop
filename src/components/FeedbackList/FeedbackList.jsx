import { useSelector } from 'react-redux';
// import {useHistory} from 'react-router-dom'


function FeedbackList () {

    const feedbackList = useSelector( store => store.feedbackList)

    // const history = useHistory();

    return (
        <div>
            {feedbackList.map(feedback => (
                <FeedbackItem 
                key={feedback.id}
                />
            ))}
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
    
}

// export default FeedbackList;