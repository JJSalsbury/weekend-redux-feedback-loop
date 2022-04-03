import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function FeelingForm({feelingForm}) {
    console.log('FeelingForm Component')

    const [feelingOption, setFeelingOption] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Changed page to:');
        dispatch({
            type:'SET_FEELING',
            payload: feelingOption
        })
        history.push('/understandingForm');
    }

    return (

        <>
        <p>How Are You Feeling Today?</p>
        <section>
        <form  onSubmit={handleClick}>      
        <input onChange={event => setFeelingOption(event.target.value)} min={1} max={5} required value= {feelingOption}  type="number"/>
        <button>NEXT</button>
        </form>
        </section>  
        </>

    );

}

export default FeelingForm;