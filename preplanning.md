
# JJ's Project Preplanning Weekend Project.  
## The Redux FeedBack Loop.  
​
**JJ's Project Preplanning:**
  
[x] Power on laptop.  
[x] Install npm libraries, as needed needed.  
    [x] express, pg.  
//[x] Create Pool.// (take out)  
​
## Database  

1. Create database:
    [] Create database and tables using the provided data.sql file. 
2. Start the server:
    [] npm install
    [] npm run server   
3. Start client app:
    [] npm run client
​
## Server/Router & ROUTE Considerations  

​1. Server/Router  
    • server/router confederations.   
[x]  server (server.js). 
    [x] Express Routes:  
        [x] not provided.
        []  
        []   
[x]  router (not provided). 
    [] PUT ROUTES:  
        [] /like/:id (PROVIDED) //remove later 
        
## DOM
[x] create a gallery page to share pictures of things that are important to you.  

## Requirements:  

[x] As a baseline requirement, you must use Redux to store your data across views.  

[x] Creating a reflection/feedback form modeled after Prime's system. 
    • Feedback will be collected over 4 views.  
        [] In a separate review page, display the current feedback values and a SUBMIT button. 
        [] When all steps are complete, ensure that the app will save the feedback in the database.  

[] Each part of the form should be it's own route. Clicking next should move the user to the appropriate step in the process.

[] Input Validation:
    • Each step should only allow the user to advance to the next step if a score was provided. 
        [] Be sure to tell the user in some way that a value must be provided. (ALERT?)
        [] The Comments step does not need to be validated, an empty value is okay.

[] Review Component:
    • The last step of the process will allow the user to review.
        [] Allow the user to review their feedback.
        [] Users are NOT able to change their input on this step, or go back (for Base Mode).
        [] The Review step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.
            [] On click, save the submission in the database.
                [] The user should see a submission success page.
                [] They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.
            

## Client (React)  

## Components:  

## App - represents the overall application or site.  
       
## How Are You Feeling Today?  
 
## How Well Are You Understanding the Content? 

## How Well Are You Being Supported?

## Any Comments You Want To Leave.


        



