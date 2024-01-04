import React,{useState} from 'react'
import styled from 'styled-components'
import "./Header.css"
import { Link } from 'react-router-dom'

const LimitHeader = () => {
  const [show, setShow] = useState(false)

  return (
    <NavWrapper show={show}>s
        <Logo>
        <img
          alt="Dasom Logo"
          src="/images/dasom-logo.png"
          onClick={()=>(window.location.href="/main")}
        />
      </Logo>
      <NavBar>
        <span className='nav-about-limit'>
          <Link to="/about">ABOUT</Link>
        </span>
        <span className='nav-project-limit'>
          <Link to="/project">PROJECT</Link>
        </span>
        <span className='nav-recruit-limit'>
          <Link to="/recruit">RECRUIT</Link>
        </span>
        <span className='nav-login-limit'>
          <Link to="/login">
            LOGIN
          </Link>
        </span>
      </NavBar>
    </NavWrapper>
  )
}

export default LimitHeader

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: "#050505";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;  
  left-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: 4px;
  margin-height: 70px;
  display: inline-block;
  left: 360px;
  z-index: 3;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const NavBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #050505;
  left: 0;
  justify-content: center;
  align-items: center;
`;