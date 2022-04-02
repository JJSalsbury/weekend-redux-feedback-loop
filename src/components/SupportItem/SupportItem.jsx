import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function SupportItem({supportItem}) {
    console.log('SupportItem Component')

    const [supportOption, setSupportOption] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        console.log('Changed page to:');
        dispatch({
            type:'SET_UNDERSTANDING',
            payload: supportOption
        })
        history.push('/commentsItem');
    }



    return (
        <div>
        <p>How well are you being supported?</p>
        <form  onSubmit={handleClick}>      
        <input value= {supportOption} onChange={event => setSupportOption(event.target.value)} type="number"/>
        <button>NEXT</button>
        </form>  
    </div>
    );

}

export default SupportItem;