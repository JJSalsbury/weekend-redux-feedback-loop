import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function UnderstandingForm({understandingForm}) {
    console.log('UnderstandingForm Component')

    const [understandingOption, setUnderstandingOption] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Changed page to:');
        dispatch({
            type:'SET_UNDERSTANDING',
            payload: understandingOption
        })
        history.push('/supportForm');
    }



    return (
        <div>
        <p>How well are you understanding the content?</p>
        <form  onSubmit={handleClick}>      
        <input onChange={event => setUnderstandingOption(event.target.value)} className="size" min={1} max={5} required value= {understandingOption} type="number" required/>
        <button  className="size">NEXT</button>
        </form>  
        </div>
    );

}

export default UnderstandingForm;