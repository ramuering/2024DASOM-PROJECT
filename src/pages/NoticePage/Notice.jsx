import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer';
import data from './data.js';
import { Link } from 'react-router-dom';
import "./Common-Notice.css"
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


function Notice() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  const [boardList, setboardList] = useState([]);

  useEffect(() => {
      const fetchNotice = async () => {
        try {
          const response = await axios.get('https://dmu-dasom.or.kr:8090/board/notice');
          if (response.data.success) {
            setboardList(response.data.data);
            console.log("공지사항 불러오기")
            console.log(response)
          }
        } catch (error) {
          console.error('Error fetching studys:', error);
        }
      };

      fetchNotice();
    }, []);



  const [searchInput, setSearchInput] = useState('');

const searchTitle = async (searchValue) =>{
  console.log("검색 실행 ")
try {
  const response = await axios.post('https://dmu-dasom.or.kr:8090/board/notice/title',{noticeTitle : searchValue});
  if (response.data.success) {
    setboardList(response.data.data); // 검색 결과를 boardList에 저장합니다.
    console.log("검색성공");
  } 
  else if (response.status === 404) {
    alert("일치하는 항목이 없습니다")
  }
  else {
    console.log("일치하는 항목 없음");
  }
} catch (error) {
  console.error("에러 발생:", error);
}
}

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

        <div class="search-container">
            <input placeholder='검색어를 입력하세요' id="Nocr-inputs" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
          <div class="search-icon1" style={{ backgroundImage: "url('images/search-icon.png')" }}
            onClick={()=>searchTitle(searchInput)}></div>
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
                <td class="Noti-s"><Link to={`/noticedetail/${boardList.noticeNo}`}>{boardList.noticeNo}</Link></td>
                <td class="Noti-l"><Link to={`/noticedetail/${boardList.noticeNo}`}>{boardList.noticeTitle}</Link></td>
                <td class="Noti-s"><Link to={`/noticedetail/${boardList.noticeNo}`}>{boardList.memName}</Link></td>
                <td class="Noti-s"><Link to={`/noticedetail/${boardList.noticeNo}`}>{boardList.noticeRegisterDate.slice(0,10)}</Link></td>
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
export default Notice;