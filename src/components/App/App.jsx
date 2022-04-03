//Installed libraries as dependencies (see package.json). 
//npm install: 
//react-router-dom@5 
//redux@4
//react-redux@7
//redux-logger

//Imports
import React from 'react';
import './App.css';
import { useEffect } from 'react';
//Linking not required for this assignment.
import { HashRouter as Router, Route} from 'react-router-dom';

//Component Imports
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import ThankYouForm from '../ThankYouForm/ThankYouForm';


function App() {

  //Initiate call to server to run on initial load.
  useEffect(() => {
    console.log('useEffect');
  }, [])

  //imported HashRouter from react-router-dom
  //Render Return wrapped in Router tag.
  //Created route paths for each component.
  return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
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
  );
}

export default App;
