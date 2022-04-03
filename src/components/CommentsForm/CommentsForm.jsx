import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function CommentsForm({commentsForm}) {
    console.log('CommentsForm Component')

    const [commentsOption, setCommentsOption] = useState('');

    const dispatch = useDispatch();

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Changed page to:');
        // history.push('/supportItem');
        dispatch({
            type:'SET_COMMENTS',
            payload: commentsOption           
        })
        history.push('/reviewForm');
    }

    return (
        <div>
            <p>Any comments you wanted to leave?</p>
            <form  onSubmit={handleClick}>      
            <textarea value= {commentsOption} onChange={(event) => setCommentsOption(event.target.value)} className="size" type="text" placeholder="Comments" required/>
            <button className="size">NEXT</button>
            </form>  
        </div>
    );

}

export default CommentsForm;