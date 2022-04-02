import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';


function CommentsItem({commentsItem}) {
    console.log('SupportItem Component')

    const [commentsOption, setCommentsOption] = useState('');

    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Changed page to:');
        // history.push('/supportItem');
        dispatch({
            type:'SET_COMMENTS',
            payload: commentsOption
            
        })
    }

    return (
        <div>
            <p>Any comments you wanted to leave?</p>
            <form  onSubmit={handleClick}>      
            <input value= {commentsOption} onChange={event => setCommentsOption(event.target.value)} type="text" placeholder="Comments" />
            <button>NEXT</button>
            </form>  
        </div>
    );

}

export default CommentsItem;