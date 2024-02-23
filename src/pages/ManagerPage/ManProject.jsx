import React, { useState, useEffect } from 'react';
import './ManProject.css';
import Header from '../../components/Header';
import axios from 'axios';

function ManProject() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/board/project');
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.projectTitle.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [projects, search]);

  const handleSearch = () => {
    setFilteredProjects(
      projects.filter((project) =>
        project.projectTitle.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleWithdrawal = async (projectId) => {
    const confirmation = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmation) {
      try {
        await axios.delete(`https://dmu-dasom.or.kr:8090/board/project/${projectId}`);
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.projectNo !== projectId)
        );
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProjects = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredProjects.length);

    return filteredProjects.slice(startIndex, endIndex).map((project) => (
      <li key={project.projectNo}>
        <div className='manProject-infoname'>{project.projectTitle}</div>
        <a href='./manProjectModify'>
          <button className='manProject-btn-modify'>수정</button>
        </a>
        <button
          className='manProject-btn-withdraw'
          onClick={() => handleWithdrawal(project.projectNo)}
        >
          삭제
        </button>
      </li>
    ));
  };

  return (
    <div className='manProject'>
      <Header />
      <div className='manProject-only'>
        <p className='manProject-title'>프로젝트 관리</p>
        <a className='manProject-a' href='./manProjectApply'>
          <button className='manProject-button'>프로젝트 등록</button>
        </a>
        <div className='manProject-searchBar'>
          <input
            type='text'
            placeholder='검색어를 입력하세요'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>
            <img src='./images/search.PNG' alt='검색' />
          </button>
        </div>
        <div className='manProject-projectList'>
          <div className='manProject-listTitle'>
            <p className='manProject-name'>이름</p>
            <p className='manProject-modify'>수정</p>
            <p className='manProject-withdraw'>삭제</p>
          </div>
          <ul>{renderProjects()}</ul>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProjects.length / pageSize)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ManProject;

function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = 5;
  const halfVisible = Math.floor(visiblePages / 2);
  const startPage = Math.max(1, currentPage - halfVisible);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className='manApply-pagination'>
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
