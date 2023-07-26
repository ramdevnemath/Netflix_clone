import React, { useEffect, useState } from 'react'
import "./navBar.css"

function NavBar() {
  const [scroll, setScroll] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      setScroll(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  },[])
  return (
    <div className={`navbar ${scroll ? 'scroll' : ''}`}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  );
}

export default NavBar;