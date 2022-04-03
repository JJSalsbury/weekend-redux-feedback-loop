import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, useHistory } from 'react-router-dom';

// import Home from '../Home/Home';
// import FeelingItem from '../FeelingItem/FeelingItem';
// import UnderstandingItem from '../UnderstandingItem/UnderstandingItem';
// import SupportItem from '../SupportItem/SupportItem';
// import CommentsItem from '../CommentsItem/CommentsItem';

function ReviewItem() {

    const history = useHistory();
    const dispatch = useDispatch();

    const feelingItem = useSelector(store => store.setFeeling)
    const understandingItem = useSelector(store => store.setUnderstanding)
    const supportItem = useSelector(store => store.setSupport)
    const commentsItem = useSelector(store => store.setComments)

    const studentFeedback = {
    feeling: feelingItem,
    understanding: understandingItem,
    support: supportItem,
    comments: commentsItem
    }

    const handleSubmit = () => {
        console.log('In reviewItem');
        axios.post('/feedback', studentFeedback) 

            .then(response => {
                // history.push('/thanks');
                console.log('Feedback Submitted!')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <div>
        <h1>Review Your Feedback</h1>
        <div>Feeling: {feelingItem}</div>
        <div>Understanding: {understandingItem}</div>
        <div>Support: {supportItem}</div>
        <div>Comments: {commentsItem}</div>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
    </>
    )

}

export default ReviewItem;
