import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function ReviewForm() {

    const history = useHistory();

    const feelingForm = useSelector(store => store.setFeeling)
    const understandingForm = useSelector(store => store.setUnderstanding)
    const supportForm = useSelector(store => store.setSupport)
    const commentsForm = useSelector(store => store.setComments)

    const studentFeedback = {
    feeling: feelingForm,
    understanding: understandingForm,
    support: supportForm,
    comments: commentsForm
    }

    const handleSubmit = () => {
        console.log('In reviewForm');
        axios.post('/feedback', studentFeedback) 

            .then(response => {
                history.push('/thanks');
                console.log('Feedback Submitted!')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <div>
        <h1>Review Your Feedback</h1>
        <div>Feeling: {feelingForm}</div>
        <div>Understanding: {understandingForm}</div>
        <div>Support: {supportForm}</div>
        <div>Comments: {commentsForm}</div>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
    </>
    )

}

export default ReviewForm;
