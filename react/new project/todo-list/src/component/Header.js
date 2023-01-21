import React from 'react'
// import './header.css';
const Header = () => {
    console.log("i am inside headers")

  return (
    <>
        <header className='navbar'>
            <div className='navlist'>
                <li><a href="#">my traveljournal.</a></li>
            </div>
            <div className='logo'>
                <img src="" alt="logo" />
            </div>
        </header>
    </>
  )
}

export default Header