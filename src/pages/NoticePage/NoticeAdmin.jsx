import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer';
import data from './data.js';
import { Link } from 'react-router-dom';
import "./Common-Notice.css"
import "./NoticeAdmin.css"
import axios from 'axios';

const NotiNullBox = styled.div`
    width: 100%;
    height: 150px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const PrevNextBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #54ecc4;
  background: none;
  margin: 50px 10px 0 10px;
  color: #54ecc4;
  font-weight: bold;
`;

// ND-btn 스타일 컴포넌트 정의
const NDbtn = styled.button`
width: 24px;
height: 24px;
border-radius: 10px;
border:1px solid #54ECC4;
background: none;
margin: 50px 50px 0 50px;
color: #54ECC4;
font-weight: bold;

  ${(props) =>
    props.active &&
    css`
      background-color: #54ECC4; // 활성화된 페이지 버튼 스타일
      color:black;
    `}
`;


function NoticeAdmin() {

const [boardList, setboardList] = useState([]);

  useEffect(() => {
      const fetchStudys = async () => {
        try {
          const response = await axios.get('https://dmu-dasom.or.kr:8090/board/notice');
          if (response.data.success) {
            setboardList(response.data.data);
            console.log("관리자 공지사항 페이지 데이터 받아오기 성공")
            console.log(response)
          }
        } catch (error) {
          console.error('Error fetching studys:', error);
        }
      };

      fetchStudys();
    }, []);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  const itemsPerPage = 10; // 한 페이지에 표시할 아이템 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 정보

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage <= totalPages ? nextPage : totalPages;
    });
  };

  const renderPageButtons = () => {
    const visiblePageButtons = 5;
    const totalPageButtons = Math.min(visiblePageButtons, totalPages);

    // Calculate the start and end page numbers
    let startPage = Math.max(currentPage - Math.floor(visiblePageButtons / 2), 1);
    let endPage = startPage + totalPageButtons - 1;

    // Adjust the start and end page numbers if they go beyond the valid range
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - visiblePageButtons + 1, 1);
    }

    return Array.from({ length: totalPageButtons }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <NDbtn
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          active={currentPage === pageNumber}
        >
          {pageNumber}
        </NDbtn>
      );
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id='Noti-main'>
      <div id="Null-box">
        <NotiNullBox></NotiNullBox>
        <p id="Noti-title">공지사항</p>
        <div id="Nocr-div">
        <div class="search-container">
            <input placeholder='검색어를 입력하세요' id="Nocr-inputs"></input>
            <div class="search-icon" style={{ backgroundImage: "url('images/search-icon.png')" }}></div>
        </div>
        <Link to="../noticecreate" className="Nocr-btn">공지사항 등록</Link>
        </div>
        <table id='Noti-table'>
            <tr id ="tr-title">
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
            {boardList.map((boardList) => (
              <tr id='tr-contents' key={boardList.id}>
                <td class="Noti-s"><Link to={`/noticeadmindetail/${boardList.id}`}>{boardList.noticeNo}</Link></td>
                <td class="Noti-l"><Link to={`/noticeadmindetail/${boardList.id}`}>{boardList.noticeTitle}</Link></td>
                <td class="Noti-s"><Link to={`/noticeadmindetail/${boardList.id}`}>{boardList.memName}</Link></td>
                <td class="Noti-s"><Link to={`/noticeadmindetail/${boardList.id}`}>{boardList.noticeRegisterDate.slice(0,10)}</Link></td>
              </tr>
            ))}
        </table>


        {/* 페이지 버튼 생성 */}
        <Pagination className="pagination">
          <PrevNextBtn onClick={handlePrevClick}>&lt;</PrevNextBtn>
          {renderPageButtons()}
          <PrevNextBtn onClick={handleNextClick}>&gt;</PrevNextBtn>
        </Pagination>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default NoticeAdmin;
