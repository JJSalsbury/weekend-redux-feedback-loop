import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';

function UnderstandingItem({understandingItem}) {
    console.log('UnderstandingItem Component')
    // const [feelingOption, setFeelingOption] = useState

    const dispatch = useDispatch();

    return (
        <div>
            <p>How well are you understanding the content?</p>
            <input type="number" />
        </div>
    );

}

export default UnderstandingItem;