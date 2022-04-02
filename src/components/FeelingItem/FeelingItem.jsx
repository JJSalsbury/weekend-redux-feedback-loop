import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';

function FeelingItem({feelingItem}) {
    console.log('FeelingItem Component')
    // const [feelingOption, setFeelingOption] = useState

    const dispatch = useDispatch();

    return (
        <div>
            <p>How Are You Feeling Today?</p>
            <input type="number" />
        </div>
    );

}

export default FeelingItem;