import React from 'react'
const firstname="Vinay"
const lastname="K okate"
const Main = () => {
  return (
    <main className='content'>
        <h1>Reasons I'm excited to learn React</h1>
            <ul className='reason-list'>
              <li>Hi myself {firstname} {lastname}</li>
              <li>to get a job </li>
              <li>to make a project to showcase</li>
            </ul>
            
            
    </main>
  )
}

export default Main