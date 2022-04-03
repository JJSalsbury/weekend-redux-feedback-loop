import {useHistory} from 'react-router-dom';

function ThankYouForm() {

    const history = useHistory()

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log('ThankYou Form');
        history.push('/');
    }

    return (

        <div>
          <h1>Thank You!</h1>
        <button onClick={handleSubmit} type="submit">Start New Feedback</button>
        </div>
        
    );

}

export default ThankYouForm;