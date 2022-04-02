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

function App() {

  // const dispatch = useDispatch();

  // const getFeedback = () => {
  //   axios.get('/api/feedback')
  //   .then(response => {
  //     console.log(response.data);
  //     dispatch({ type: 'SET_FEEDBACK', payload: response.data})
  //   }).catch(err => {
  //     console.log('Error in getting feedback from DB', err);
  //   })
  // }

  useEffect(() => {
    console.log('in useEffect');
    // getFeedback();
  },[])

  return (
    <div>
   <Router>
     
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
       </ul>
    {/* <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header> */}
      {/* <FeedbackList /> */}

      {/* Hr tag defining thematic break in html page */}
      <hr />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/feelingItem">
      <FeelingItem />
      </Route>

      <Route path="/understandingItem">
      <UnderstandingItem />
      </Route>

      <Route path="/supportItem">
      <SupportItem />
      </Route>
   </div>

    </Router>
    </div>
  );
}

export default App;
