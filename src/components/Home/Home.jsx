import React from 'react';
import {useHistory} from 'react-router-dom'

function Home() {

    const history = useHistory()

    const handleClick = () => {
        console.log('Changed page!');
        history.push('/feelingItem');
    }

    return (

        <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
         <button onClick={handleClick}>NEXT</button>
        </div>
        
    );

}

export default Home;