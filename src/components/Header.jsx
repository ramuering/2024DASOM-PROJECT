import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <NavWrapper show={show}>
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
        <NavItem to="/mypage">MY PAGE</NavItem>
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
  margin-right: 20px;
  align-items: center;
`;

const NavItem = styled(Link)`
  cursor: pointer;
  margin: 0 30px;
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
