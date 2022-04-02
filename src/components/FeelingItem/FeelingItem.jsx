import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function FeelingItem({feelingItem}) {
    console.log('FeelingItem Component')

    const [feelingOption, setFeelingOption] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        console.log('Changed page to:');
        dispatch({
            type:'SET_FEELING',
            payload: feelingOption
        })
        history.push('/understandingItem');
    }

    return (
        <div>
        <p>How Are You Feeling Today?</p>
        <form  onSubmit={handleClick}>      
        <input value= {feelingOption} onChange={event => setFeelingOption(event.target.value)} type="number"/>
        <button>NEXT</button>
        </form>  
        </div>
    );

}

export default FeelingItem;