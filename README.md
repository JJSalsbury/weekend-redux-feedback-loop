# WEEKEND REDUX FEEDBACK LOOP

## Description

_Duration: MARCH 31ST - APRIL 3RD_

I created a reflection/feedback form modeled after the feedback form used at Prime Academy. Feedback will be collected over 4 views. In a separate review page, the current feedback values are displayed with a submit button. Upon click of the submit button my application will save the user's feedback in the database I created.

I've created a multi-part form that allows users to leave feedback in 4 views for the form part.

While there is no nav bar, each part of the form is it's own route. Clicking next should move the user to the appropriate step in the process.

Input validation: Each step allows the user to advance to the next step if a score was provided. A notification is provided that tells the user that a value must be provided. A user may not advance to the next form view until a score is submitted.

In the review form view, a user is able to review, but not change, their feedback and submit. 

When the submit button is clicked, the submission is saved to the database. The user should see a submission success page, or, "thank you" page. They can then click the button to take a new survey, which will reset all the data and go back to start a new reflection.

I was introduced to to REDUX the Monday before the start of my project. By Thursday of that same week, I was using REACT and REDUX to accomplish project. Developing the project started with thoughtful and intentional preplanning, which made the execution of the project much easier. I developed a solid plan.

When creating the express route I used the app.use method to put the specified middleware function on a specified path. In the code body, I used the server and then created the server requirement. This made it so that my express route couldn't function. Once I moved the line of code with the method after the server requirement, it was able to run. Lesson learned. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![alt text](/ScreenShot1.png?raw=true "Screenshot")
![alt text](/ScreenShot2.png?raw=true "Screenshot")
![alt text](/ScreenShot3.png?raw=true "Screenshot")
![alt text](/ScreenShot4.png?raw=true "Screenshot")
![alt text](/ScreenShot5.png?raw=true "Screenshot")
![alt text](/ScreenShot6.png?raw=true "Screenshot")

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [node.js](https://nodejs.org/en/)
- [react.js](https://reactjs.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [redux] (https://react-redux.js.org/)


## Installation

1. Open up code editor, run an `npm install`
2. Running the server code requires nodemon. If you don't already have nodemon, install it globally with npm install nodemon --global.
3. Run `npm run server` in your terminal.
4. Run `npm run client` in your terminal.
5. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Rate how you're feeling on a scale of 1-5. Input is required. Click next to proceed to the next question.
2. Rate how well you understand the material on a scale of 1-5. Input is required. Click next to proceed to the next question.
3. Rate how you're you feel you're being supported on a scale of 1-5. Input is required. Click next to proceed to the next question.
4. Add any comments. Input is required. Click next to proceed to review all ratings.
5. Click submit to submit you're reflection.
6. Thank you for completing your reflection! You may click the button Start New Feedback.

## Built With

- JavaScript  
- React  
- Css  
- Html
- Redux  

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. And thank you to my fellow students who provided support and helped great an amazing environment for collaborative learning. And of course, thanks to Prime, the subject and inspiration for this application. 

## Support  

If you have suggestions or issues, please email me at [joshuajsalsbury@gmail.com](www.google.com)