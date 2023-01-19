import React from 'react'

const Header = () => {
  return (
    <header>
       <nav className='navbar'>
        <div className='navbar-logotext'>
          <img src="logo192.png" alt="logo"/>
          <h2><a href="#">ReactFacts</a></h2>
        </div>
        <ul className='navbar-list'>
            <li><a href="#"> Pricing</a></li>
            <li><a href="#"> About</a></li>
            <li><a href="#"> Contact</a></li>
        </ul>
       </nav>
     </header>
  )
}

export default Header