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
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import ThankYouForm from '../ThankYouForm/ThankYouForm';

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
           <Link to="/feelingForm">Feeling</Link>
         </li>
         <li>
           <Link to="/understandingForm">Understanding</Link>
         </li>
         <li>
           <Link to="/supportForm">Support</Link>
         </li>
         <li>
           <Link to="/commentsForm">Comments</Link>
         </li>
         <li>
           <Link to="/reviewForm">Review</Link>
         </li>
       </ul> */}

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header> 
 
      {/* <Route path="/">
        <Home />
      </Route> */}

      <Route path="/" exact>
      <FeelingForm />
      </Route>

      <Route path="/understandingForm">
      <UnderstandingForm />
      </Route>

      <Route path="/supportForm">
      <SupportForm />
      </Route>

      <Route path="/commentsForm">
      <CommentsForm />
      </Route>

      <Route path="/reviewForm">
      <ReviewForm />
      </Route>

      <Route path="/thanks">
      <ThankYouForm />
      </Route>
   </div>

    </Router>
    </div>
  );
}

export default App;
