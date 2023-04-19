# My Todo List

This is a simple React project to practice some React. 
Current sample deployment using Vercel: https://my-todo-list-pb8kuktvg-junghbae.vercel.app/ 

## V1 
 Simple todo list creator. 
  - Used task as state created on parent component App.js, 
    because both the AddTask and TaskList components need to set the state of the task.  
    
 Problems:
  - This kind of state structure causes useless rerendering of components because they share the same state.  

 Future Improvements:
  - Need to handle text overflow
  - cards are not ux friendly, mismatch in size
  
## V2
 Changes:
  - Made some major changes using redux and router. useless rendering no longer a problem.
  - Added a Details page of the selected task.
  
## v3 
 Changes:
  - Major overhaul on the appearance, css
  
## v4
 Changes:
  - Major changes to the UI.
  - Added route transition animations using **framer-motion**
  - Added component render animations using **framer-motion**
  - Added Editing feature to the Details page
  - Added a very primitive Light/Dark theme
  - Added real-time Details editing validation check and letter count limit.
 
  
