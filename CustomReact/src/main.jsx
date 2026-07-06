import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
       <h1>Create by Arbab</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Google</a>
)

const  reactElement = React.createElement(
  'a',
  {href : 'https://youtube.com' , target : '_blank'},
  "Click me"
)


ReactDOM.createRoot(document.getElementById('root')).render(
   
  
        < App/>
    
)
