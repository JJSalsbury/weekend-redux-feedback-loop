
# JJ's Project Preplanning Weekend Project.  
## The Redux FeedBack Loop.  
​
**JJ's Project Preplanning:**  
  
[x] Power on laptop.  
[x] Install npm libraries, as needed needed.  
    [x] express, pg.  
[x]Pool provided.)  
​
## Database  

1. Create database:
    [x] Create database and tables using the provided data.sql file. 
2. Start the server:  
    [x] npm install  
    [x] npm run server  
3. Start client app:  
    [x] npm run client  
​
## Server/Router & ROUTE Considerations:  

​1. Server/Router  
    • server/router confederations.   
[x]  server (server.js).  
    [x] Express Routes  

[x]  router (not provided).  
    [x] POST ROUTE   
    
        
## Requirements:  

1. As a baseline requirement, you must use Redux to store your data across views.  
    
    [x] Create a reflection/feedback form modeled after Prime's system.  
    
2. Feedback will be collected over 4 views.  
        
    [x] In a separate review page, display the current feedback values and a SUBMIT button.  
        
    [x] When all steps are complete, ensure that the app will save the feedback in the database.  

    [x] Each part of the form should be it's own route. Clicking next should move the user to the appropriate step in the process.  

3. Input Validation:  
    
    • Each step should only allow the user to advance to the next step if a score was provided.  
        
    [x] Be sure to tell the user in some way that a value must be provided. (ALERT?)  
        
    [x] The Comments step does not need to be validated, an empty value is okay.  

4. Review Component:  
    
    • The last step of the process will allow the user to review.  
        
    [x] Allow the user to review their feedback.  
        
    [x] Users are NOT able to change their input on this step, or go back (for Base Mode).  
        
    [x] The Review step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.  
            
    [x] On click, save the submission in the database.  
                
    [x] The user should see a submission success page.  
                
[x] They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.