# My Todo List

This is a simple React project to practice some React.   

Current sample deployment: http://todoawsbucket.s3-website.ap-northeast-2.amazonaws.com/  

## v1.1 
 Simple todo list creator.  
 v1: https://my-todo-list-njwhuu81e-junghbae.vercel.app
  - Used task as state created on parent component App.js, 
    because both the AddTask and TaskList components need to set the state of the task.  
    
 Problems:
  - This kind of state structure causes useless rerendering of components because they share the same state.  

 Future Improvements:
  - Need to handle text overflow
  - cards are not ux friendly, mismatch in size
  
## v1.2 
 v2: https://my-todo-list-nr6nl1x10-junghbae.vercel.app/  
 
 Changes:
  - Made some major changes using redux and router. useless rendering no longer a problem.
  - Added a Details page of the selected task.
  
## v1.3 
 v3: https://my-todo-list-elwqdgxvp-junghbae.vercel.app/  
 
 Changes:
  - Major overhaul on the appearance, css
  
## v1.4
 Changes:
 v4: https://my-todo-list-3azmxtlky-junghbae.vercel.app/  
 
  - Major changes to the UI.
  - Added route transition animations using **framer-motion**
  - Added component render animations using **framer-motion**
  - Added Editing feature to the Details page
  - Added a very primitive Light/Dark theme
  - Added real-time Details editing validation check and letter count limit.
 
## v1.5
 v5: https://my-todo-list-pgx2m4ufg-junghbae.vercel.app/  
 
 Changes:
  - The AddTask component is no longer a part of the Layout file.
  - AddTask now acts as a dropdown component.
  - Added visual validation text to the AddTask component.
  - Fixed strange scrollbar behavior, namely the 'scrollbar jump'
  - Some minor visual adjustments using css.  
  
