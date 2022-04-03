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
        event.preventDefault();
        console.log('Changed page to:');
        dispatch({
            type:'SET_SUPPORT',
            payload: supportOption
        })
        history.push('/commentsItem');
    }



    return (
        <div>
        <p>How well are you being supported?</p>
        <form  onSubmit={handleClick}>      
        <input onChange={event => setSupportOption(event.target.value)} min={1} max={5} required value= {supportOption}  type="number" required/>
        <button>NEXT</button>
        </form>  
    </div>
    );

}

export default SupportItem;