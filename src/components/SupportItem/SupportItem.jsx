import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';

function SupportItem({supportItem}) {
    console.log('SupportItem Component')
    // const [feelingOption, setFeelingOption] = useState

    const dispatch = useDispatch();

    return (
        <div>
            <p>How well are you being supported?</p>
            <input type="number" />
        </div>
    );

}

export default SupportItem;