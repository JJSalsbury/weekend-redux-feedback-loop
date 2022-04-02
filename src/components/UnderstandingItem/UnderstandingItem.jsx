import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function UnderstandingItem({understandingItem}) {
    console.log('UnderstandingItem Component')

    const [understandingOption, setUnderstandingOption] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        console.log('Changed page to:');
        dispatch({
            type:'SET_UNDERSTANDING',
            payload: understandingOption
        })
        history.push('/supportItem');
    }



    return (
        <div>
        <p>How well are you understanding the content?</p>
        <form  onSubmit={handleClick}>      
        <input value= {understandingOption} onChange={event => setUnderstandingOption(event.target.value)} type="number"/>
        <button>NEXT</button>
        </form>  
        </div>
    );

}

export default UnderstandingItem;