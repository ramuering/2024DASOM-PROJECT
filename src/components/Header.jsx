import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  
  //const token = '1234567abcd' //임시값


  return (
    <NavWrapper>
      <Logo to="/main">
        <img alt="Dasom Logo" src="/images/dasom-logo-header.png" />
      </Logo>
      <NavBar>
        <NavItem to="/about">ABOUT</NavItem>
        <NavItemWithDropdown>
          <DropdownLabel>ACTIVE</DropdownLabel>
          <DropdownMenu>
            <DropdownItem to="/study">STUDY</DropdownItem>
            <DropdownItem to="/notice">공지사항</DropdownItem>
            <DropdownItem to="/project">PROJECT</DropdownItem>
          </DropdownMenu>
        </NavItemWithDropdown>
        <NavItem to="/recruit">RECRUIT</NavItem>
        <NavItem to="/admin">ADMIN</NavItem>
        <NavItemWithDropdown>
          <ProfileImageWrapper>
          {isLoggedIn ? (
      <>
      <Link to="/mypage">
        <ProfileImage
          src="/images/myPage/profile.jpg"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        />
        </Link>
        {showDropdown && (
          <DropdownMenu>
            {/* 로그인 상태일 때 나타날 드롭다운 메뉴 */}
            <DropdownItem to="/mypage">MY PAGE</DropdownItem>
            <DropdownItem onClick={handleLogout}>LOGOUT</DropdownItem>
          </DropdownMenu>
        )}
      </>
    ) : (
      <>
      <Link to="/mypage">
        <ProfileImage
          src="/images/myPage/profile.jpg"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        />
        </Link>
        {showDropdown && (
          <DropdownMenu>
            {/* 로그인 상태가 아닐 때 나타날 드롭다운 메뉴 */}
            <DropdownItem to="/login">LOGIN</DropdownItem>
          </DropdownMenu>
        )}
      </>
    )}
          </ProfileImageWrapper>
        </NavItemWithDropdown>
      </NavBar>
    </NavWrapper>
  );
};

export default Header;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #050505;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled(Link)`
  width: 100px;
  height: 60px;
  margin-top: 4px;
  margin-left: 70px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const NavBar = styled.div`
  display: flex;
  background-color: #050505;
  justify-content: flex-start;
  margin-right: 100px;
  align-items: center;
`;

const NavItem = styled(Link)`
  cursor: pointer;
  margin: 0 40px;
  color: #ffffff;

  &:hover {
    color: #54ecc4;
    transition: color .4s ease-in-out;
  }
`;

const NavItemWithDropdown = styled.div`
  position: relative;
  margin: 0 30px; 
`;

const DropdownLabel = styled.div`
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: #54ecc4;
    transition: color .4s ease-in-out;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -57px;
  display: none;
  min-width: 150px;
  background-color: #050505;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;
  transition: opacity 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  flex-direction: column;
  align-items: center;

  ${NavItemWithDropdown}:hover & {
    display: block;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  margin: 0 auto;
  &:hover {
    color: #54ecc4;
    transition: color .4s ease-in-out;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
