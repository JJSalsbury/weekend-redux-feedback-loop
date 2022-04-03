import React from 'react';
import axios from 'axios';
import './App.css';

//Imports
// import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//Component Imports
// import FeedbackList from './FeedbackList/FeedbackList';
import Home from '../Home/Home';
import FeelingItem from '../FeelingItem/FeelingItem';
import UnderstandingItem from '../UnderstandingItem/UnderstandingItem';
import SupportItem from '../SupportItem/SupportItem';
import CommentsItem from '../CommentsItem/CommentsItem';
import ReviewItem from '../ReviewItem/ReviewItem';

function App() {



  useEffect(() => {
    console.log('in useEffect');
    // getFeedback();
  },[])

  return (
    <div>
   <Router>
{/*      
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/feelingItem">Feeling</Link>
         </li>
         <li>
           <Link to="/understandingItem">Understanding</Link>
         </li>
         <li>
           <Link to="/supportItem">Support</Link>
         </li>
         <li>
           <Link to="/commentsItem">Comments</Link>
         </li>
         <li>
           <Link to="/reviewItem">Review</Link>
         </li>
       </ul> */}

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header> 
 


      <hr />

      {/* <Route path="/">
        <Home />
      </Route> */}

      <Route path="/feelingItem" exact>
      <FeelingItem />
      </Route>

      <Route path="/understandingItem">
      <UnderstandingItem />
      </Route>

      <Route path="/supportItem">
      <SupportItem />
      </Route>

      <Route path="/commentsItem">
      <CommentsItem />
      </Route>

      <Route path="/reviewItem">
      <ReviewItem />
      </Route>
   </div>

    </Router>
    </div>
  );
}

export default App;
