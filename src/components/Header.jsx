import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // 토큰이 있는지 여부에 따라 로그인 상태 설정
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/members/index');
        console.log(response);
        if (response.data.success) {
          setMembers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);


   const handleLogout = async () => {
      try {
        // 로그아웃 요청
        const response = await axios.post('https://dmu-dasom.or.kr:8090/logout');
        if (response.status === 401) {
          localStorage.removeItem('accessToken'); // 로컬스토리지에서 토큰 제거
          setIsLoggedIn(false);
          alert('로그아웃 되었습니다.');
          navigate('/main'); // 메인 페이지로 이동
        }
      } catch (error) {
        localStorage.removeItem('accessToken'); // 로컬스토리지에서 토큰 제거
        alert('로그아웃 되었습니다.');
        navigate('/main'); // 메인 페이지로 이동
        setIsLoggedIn(false);
      }
    };

    const handleMyPageClick = () => {
        if (isLoggedIn) {
          window.location.href = '/mypage';
        } else {
          alert('로그인을 먼저 해주세요.');
          window.location.href = '/login';
        }
      };

  return (
    <NavWrapper>
      <Logo to="/main">
        <img alt="Dasom Logo" src="/images/dasom-logo-header.png" />
      </Logo>
      <NavBar>
        <NavItemWithDropdown>
          <DropdownLabel>ABOUT</DropdownLabel>
          <DropdownMenu>
            <DropdownItem to="/about">ABOUT</DropdownItem>
            <DropdownItem to="/makers">MAKERS</DropdownItem>
          </DropdownMenu>
        </NavItemWithDropdown>
        <NavItemWithDropdown>
          <DropdownLabel>ACTIVE</DropdownLabel>
          <DropdownMenu>
            <DropdownItem to="/study">STUDY</DropdownItem>
            <DropdownItem to="/project">PROJECT</DropdownItem>
          </DropdownMenu>
        </NavItemWithDropdown>
        <NavItem to="/recruit">RECRUIT</NavItem>
        <NavItemWithDropdown>
          <DropdownLabel>
            <ProfileImageWrapper>
              <ProfileImage src="/images/myPage/basicProfile.jpeg" />
            </ProfileImageWrapper>
          </DropdownLabel>
          <DropdownMenu>
            {isLoggedIn ? (
              <>
              <DropdownItem to="/mypage">MYPAGE</DropdownItem>
              <DropdownItem onClick={handleLogout}>LOGOUT</DropdownItem>
              </>
              ) : (
              <>
              <DropdownItem onClick={handleMyPageClick}>MYPAGE</DropdownItem>
              <DropdownItem to="/login">LOGIN</DropdownItem>
              </>
              )}
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

const DropdownItem = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  margin: 0 auto;
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
