import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="icons" />
        <img src="app.svg" alt="icons" />
        <img src="expand.svg" alt="icons" />
        <div className="notification">
          <img src="notifications.svg" alt="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img 
            src="https://yt3.ggpht.com/yti/ADpuP3Mh438sVggbwui7aJiYnyHJmG6rSvSNbfcUWipTjQ=s88-c-k-c0x00ffffff-no-rj"
            alt="profile photo" />
          <span>Ankit</span>
        </div>
        <img src="settings.svg" alt="" className='icon' />
      </div>
    </div>
  )
}

export default Navbar