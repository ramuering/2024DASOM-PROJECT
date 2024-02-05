import React, { useState } from 'react'
import './ManStudy.css'
import Header from '../../components/Header'

function ManStudy() {

  const initialStudy = [
    { id: 1, name: 'Spring1', gen: '31' },
    { id: 2, name: 'Spring2', gen: '31' },
    { id: 3, name: 'Spring3', gen: '31' },
    { id: 4, name: 'Spring4', gen: '32' },
    { id: 5, name: 'Spring5', gen: '32' },
    { id: 6, name: 'Spring6', gen: '32' },
    { id: 7, name: 'Spring7', gen: '32' },
    { id: 8, name: 'Spring8', gen: '32' },
    { id: 9, name: 'React1', gen: '32' },
    { id: 10, name: 'React2', gen: '32' },
    { id: 11, name: 'React3', gen: '32' },
    { id: 12, name: 'React4', gen: '32' },
  ]

  const PAGE_SIZE = 10; // 페이지당 표시할 멤버 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [study, setStudy] = useState(initialStudy);
  const [search, setSearch] = useState("");

  // 페이징된 멤버 목록
  const paginatedStudy = study.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // 페이지 수 계산
  const totalPages = Math.ceil(study.length / PAGE_SIZE);

  // 페이지 이동 처리
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase();
    const filteredStudy = initialStudy.filter((study) => 
      study.gen.toLowerCase().includes(lowercaseSearch) ||
      study.name.toLowerCase().includes(lowercaseSearch)
    );
    setStudy(filteredStudy);
    setSearch('');
  };

  const handleWithdrawal = (studyId) => {
    const studyToRemove = study.find(study => study.id === studyId);
  
    if (studyToRemove) {
      const message = `${studyToRemove.name} 스터디를 삭제하시겠습니까?`;
      const userResponse = window.confirm(message);
  
      if (userResponse) {
        setStudy((prevstudy) => {
          const updatedstudy = prevstudy.filter((study) => study.id !== studyId);
          return updatedstudy;
        });
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='manStudy'>
      <Header />
      <div className='manStudy-only'>
        <p className='manStudy-title'>스터디 관리</p>
        <a className='manStudy-a' href="./manStudyApply"><button className='manStudy-button'>스터디 등록</button></a>
        <div className='manStudy-searchBar'>
          <input type="text" 
          placeholder='검색어를 입력하세요' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}/>
          <button onClick={handleSearch}><img src='./images/search.PNG' alt="검색" /></button>
        </div>
        <div className='manStudy-studyList'>
          <div className='manStudy-listTitle'>
            <p className='manStudy-name'>이름</p>
            <p className='manStudy-gen'>기수</p>
            <p className='manStudy-modify'>수정</p>
            <p className='manStudy-withdraw'>삭제</p>
          </div>
          <ul>
            {paginatedStudy.map((study) => (
              <li key={study.id}>
                <div className='manStudy-infoname'>{`${study.name}`}</div> <div className='manStudy-infogen'>{`${study.gen}`}</div>
                <a href="./ManStudyModify"><button className='manStudy-btn-modify'>수정</button></a>
                <button className='manStudy-btn-withdraw' onClick={() => handleWithdrawal(study.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default ManStudy

function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = 5; // 보여질 페이지 수
  const halfVisible = Math.floor(visiblePages / 2);
  const startPage = Math.max(1, currentPage - halfVisible);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="manApply-pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>{'<'}</button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'manApply-pageActive' : ''}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>{'>'}</button>
      )}
    </div>
  );
}