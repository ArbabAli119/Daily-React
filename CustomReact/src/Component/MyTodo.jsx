import React from 'react'
import myLogo from '../assets/myLogo.png'

function MyTodo() {
  return (
    <div>
        
        <img style={{ width: '150px', height: '150px' }} src={myLogo} alt="" />
        <ul>
            <li>My Website Logo</li>
            <li>The Tasty Bowl</li>
            <li>Food Ordering Website</li>
        </ul>

    </div>
  )
}

export default MyTodo
