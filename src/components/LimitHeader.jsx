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
        <span className='nav-about'>
          <CustomLink to="/about">ABOUT</CustomLink>
        </span>
        <span className='nav-study'>
          <CustomLink to="/study">STUDY</CustomLink>
        </span>
        <span className='nav-notice'>
          <CustomLink to="/notice">공지사항</CustomLink>
        </span>
        <span className='nav-project'>
          <CustomLink to="/project">PROJECT</CustomLink>
        </span>
        <span className='nav-recruit'>
          <CustomLink to="/recruit">RECRUIT</CustomLink>
        </span>
        <span className='nav-mypage'>
          <CustomLink to="mypage">
            MY PAGE
          </CustomLink>
        </span>
        <span className='nav-login-limit'>
          <CustomLink to="/login">
            LOGIN
          </CustomLink>
        </span>

      </NavBar>
    </NavWrapper>
  )
}

export default LimitHeader

const CustomLink = styled(Link)`
  &:hover{
    color: #54Ecc4;
    transition: color 0.4s ease-in-out;
  }
`;

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