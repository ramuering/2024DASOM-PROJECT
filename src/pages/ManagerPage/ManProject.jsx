import React, { useState } from 'react'
import './ManProject.css'
import Header from '../../components/Header'

function ManProject() {

  const initialProject = [
    { id: 1, name: '동네포착1', gen: '31', part: 'WEB' },
    { id: 3, name: '동네포착2', gen: '31', part: 'WEB' },
    { id: 2, name: '동네포착3', gen: '31', part: 'WEB' },
    { id: 4, name: '동네포착4', gen: '32', part: 'WEB' },
    { id: 5, name: '동네포착5', gen: '32', part: 'WEB' },
    { id: 6, name: '동네포착6', gen: '32', part: 'WEB' },
    { id: 7, name: '동네포착7', gen: '32', part: 'WEB' },
    { id: 8, name: '동네포착8', gen: '32', part: 'WEB' },
    { id: 9, name: '동네포착9', gen: '32', part: 'WEB' },
    { id: 10, name: '동네포착10', gen: '32', part: 'WEB' },
    { id: 11, name: '동네포착11', gen: '32', part: 'WEB' },
    { id: 12, name: '동네포착12', gen: '32', part: 'WEB' },
  ]

  const PAGE_SIZE = 10; // 페이지당 표시할 멤버 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [project, setProject] = useState(initialProject);
  const [search, setSearch] = useState("");

  // 페이징된 멤버 목록
  const paginatedProject = project.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // 페이지 수 계산
  const totalPages = Math.ceil(project.length / PAGE_SIZE);

  // 페이지 이동 처리
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase();
    const filteredProject = initialProject.filter((project) => 
      project.gen.toLowerCase().includes(lowercaseSearch) ||
      project.name.toLowerCase().includes(lowercaseSearch) ||
      project.part.toLowerCase().includes(lowercaseSearch)
    );
    setProject(filteredProject);
    setSearch('');
  };

  const handleWithdrawal = (projectId) => {
    const projectToRemove = project.find(project => project.id === projectId);
  
    if (projectToRemove) {
      const message = `${projectToRemove.name} 스터디를 삭제하시겠습니까?`;
      const userResponse = window.confirm(message);
  
      if (userResponse) {
        setProject((prevproject) => {
          const updatedproject = prevproject.filter((project) => project.id !== projectId);
          return updatedproject;
        });
      }
    }
  };

  return (
    <div className='manProject'>
      <Header />
      <div className='manProject-only'>
        <p className='manProject-title'>프로젝트 관리</p>
        <a className='manProject-a' href="./manProjectApply"><button className='manProject-button'>프로젝트 등록</button></a>
        <div className='manProject-searchBar'>
          <input type="text" placeholder='검색어를 입력하세요' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <button onClick={handleSearch}><img src='./images/search.PNG' alt="검색" /></button>
        </div>
        <div className='manProject-projectList'>
          <div className='manProject-listTitle'>
            <p className='manProject-name'>이름</p>
            <p className='manProject-gen'>기수</p>
            <p className='manProject-part'>파트</p>
            <p className='manProject-modify'>수정</p>
            <p className='manProject-withdraw'>삭제</p>
          </div>
          <ul>
            {paginatedProject.map((project) => (
              <li key={project.id}>
                <div className='manProject-infoname'>{`${project.name}`}</div>
                <div className='manProject-infogen'>{`${project.gen}`}</div>
                <div className='manProject-infopart'>{`${project.part}`}</div>
                <a href="./manProjectModify"><button className='manProject-btn-modify'>수정</button></a>
                <button className='manProject-btn-withdraw' onClick={() => handleWithdrawal(project.id)}>삭제</button>
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

export default ManProject

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