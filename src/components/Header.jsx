import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'// useHistory 대신 Link를 사용
import axios from 'axios';

const Header = () => {
 const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    // 토큰 유무 확인하는 로직
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // 로그아웃 요청
      const response = await axios.post('https://dmu-dasom.or.kr:8090/logout');
      if (response.status === 401) {
      console.log(response.status)
        localStorage.removeItem('accessToken'); // 로컬스토리지에서 토큰 제거
        setIsLoggedIn(false);
        alert('로그아웃 되었습니다.');
      }
    } catch (error) {
            localStorage.removeItem('accessToken'); // 로컬스토리지에서 토큰 제거
            setIsLoggedIn(false);
            alert('로그아웃 되었습니다.');
            navigate('/Main');
      console.error('Error logging out:', error);
    }
  };


    const final = () => {
        if (!isLoggedIn) {
        navigate('/login');
        }else{
        handleLogout();
        }
      };


  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleMyPageClick = () => {
    if (!isLoggedIn) {
      // 로그인이 되어 있지 않은 경우 알림 메시지 표시
      alert('로그인을 먼저 해주세요.');
    } else {
      // 로그인되어 있는 경우 마이페이지로 이동
      // 이 부분에서 Link 컴포넌트를 사용하여 페이지 이동을 구현합니다.
      // to 속성에는 이동하고자 하는 경로를 지정합니다.
    }
  };

  return (
    <NavWrapper>
      <Logo to="/main">
        <img alt="Dasom Logo" src="/images/dasom-logo-header.png" />
      </Logo>
      <NavBar>
        {/* 각각의 Link 컴포넌트를 사용하여 페이지 이동을 구현합니다. */}
        <NavItemWithDropdown>
          <DropdownLabel>ABOUT</DropdownLabel>
          <DropdownMenu>
            <DropdownItem as={Link} to="/about">ABOUT</DropdownItem>
            <DropdownItem as={Link} to="/makers">MAKERS</DropdownItem>
          </DropdownMenu>
        </NavItemWithDropdown>
        <NavItemWithDropdown>
          <DropdownLabel>ACTIVE</DropdownLabel>
          <DropdownMenu>
            <DropdownItem as={Link} to="/study">STUDY</DropdownItem>
            <DropdownItem as={Link} to="/notice">공지사항</DropdownItem>
            <DropdownItem as={Link} to="/project">PROJECT</DropdownItem>
          </DropdownMenu>
        </NavItemWithDropdown>
        <NavItem as={Link} to="/recruit">RECRUIT</NavItem>
        <NavItem as={Link} to="/admin">ADMIN</NavItem>
        <NavItemWithDropdown>
          <DropdownLabel>
            <ProfileImageWrapper>
              <ProfileImage
                src="/images/myPage/basicProfile.jpeg"
                onClick={handleMyPageClick} // 마이페이지 버튼 클릭 시 핸들러
              ></ProfileImage>
            </ProfileImageWrapper>
          </DropdownLabel>
          <DropdownMenu>
            <DropdownItem onClick={final}>
              {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
            </DropdownItem>
            <DropdownItem as={Link} to="/mypage">MYPAGE</DropdownItem>
          </DropdownMenu>
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
    transition: color 0.4s ease-in-out;
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
    transition: color 0.4s ease-in-out;
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

const DropdownItem = styled.div`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: #54ecc4;
    transition: color 0.4s ease-in-out;
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
