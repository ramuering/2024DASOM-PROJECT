import React,{ useState } from 'react'
import './ManApply.css'
import Header from '../../components/Header'

function ManApply() {

  const initialMembers = [
    { id: 1, gen: '31', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 2, gen: '31', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 3, gen: '31', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 4, gen: '31', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 5, gen: '32', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 6, gen: '32', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '졸업' },
    { id: 7, gen: '32', department: '인공지능소프트웨어공학과', name: '데이비드', status: '재학', graduation: '재학' },
    { id: 8, gen: '32', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '졸업' },
    { id: 9, gen: '32', department: '컴퓨터소프트웨어공학과', name: '김연아', status: '재학', graduation: '재학' },
    { id: 10, gen: '32', department: '컴퓨터소프트웨어공학과', name: '손흥민', status: '재학', graduation: '재학' },
    { id: 11, gen: '32', department: '컴퓨터소프트웨어공학과', name: '손흥민', status: '재학', graduation: '재학' },
    { id: 12, gen: '32', department: '컴퓨터소프트웨어공학과', name: '손흥민', status: '재학', graduation: '재학' },
  ]

  const PAGE_SIZE = 10; // 페이지당 표시할 멤버 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");

  // 페이징된 멤버 목록
  const paginatedMembers = members.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // 페이지 수 계산
  const totalPages = Math.ceil(members.length / PAGE_SIZE);

  // 페이지 이동 처리
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase();
    const filteredMembers = initialMembers.filter((member) => 
      member.gen.toLowerCase().includes(lowercaseSearch) ||
      member.department.toLowerCase().includes(lowercaseSearch) ||
      member.name.toLowerCase().includes(lowercaseSearch)
    );
    setMembers(filteredMembers);
    setSearch('');
  };
  

  const handleToggleStatus = (memberId) => {
    const updatedMembers = members.map((member) => {
      if (member.id === memberId) {
        const newStatus = member.status === '재학' ? '휴학' : '재학';
        const message = `${member.name}님을 ${newStatus}처리 하시겠습니까?`;
        const userResponse = window.confirm(message);
        if (userResponse) {
          return { ...member, status: newStatus };
        }
      }
      return member;
    });
  
    setMembers(updatedMembers);
  };

  const handleWithdrawal = (memberId) => {
    const memberToRemove = members.find(member => member.id === memberId);
  
    if (memberToRemove) {
      const message = `${memberToRemove.name}님을 탈퇴처리 하시겠습니까?`;
      const userResponse = window.confirm(message);
  
      if (userResponse) {
        setMembers((prevMembers) => {
          const updatedMembers = prevMembers.filter((member) => member.id !== memberId);
          return updatedMembers;
        });
      }
    }
  };

  const handleToggleGraduation = (memberId) => {
    const updatedMembers = members.map(member => {
        if (member.id === memberId) {
          const newGraduation = member.graduation === '재학' ? '졸업' : '재학';
          const message = `${member.name}님을 ${newGraduation}처리 하시겠습니까?`;
          const userResponse = window.confirm(message);
          if (userResponse) {
            return { ...member, graduation: newGraduation };
          }
        }
        return member;
    });
    setMembers(updatedMembers);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className='manApply'>
      <Header />
      <div className='manApply-only'>
        <p className='manApply-title'>회원 관리</p>
        <div className='manApply-searchBar'>
          <input type="text" 
          placeholder='검색어를 입력하세요' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}/>
          <button onClick={handleSearch}><img src='./images/search.PNG' alt="검색" /></button>
        </div>
        <div className='manApply-memList'>
          <div className='manApply-listTitle'>
            <p className='manApply-gen'>기수</p>
            <p className='manApply-department'>학과</p>
            <p className='manApply-name'>이름</p>
            <p className='manApply-timeOff'>휴・복학</p>
            <p className='manApply-graduation'>졸업</p>
            <p className='manApply-modify'>수정</p>
            <p className='manApply-withdraw'>탈퇴</p>
          </div>
          <ul>
            {paginatedMembers.map((member) => (
              <li key={member.id}>
                <div className='manApply-infogen'>{`${member.gen}`}</div> <div className='manApply-infodept'>{`${member.department}`}</div> <div className='manApply-infoname'>{`${member.name}`}</div>
                <button onClick={() => handleToggleStatus(member.id)} className={member.status === '재학' ? 'manApply-btn-attend' : 'manApply-btn-timeOff'}>
                  {`${member.status}`}
                </button>
                <button onClick={() => handleToggleGraduation(member.id)} className={member.graduation === '재학' ? 'manApply-btn-ungraduated' : 'manApply-btn-graduated'}>
                  {`${member.graduation}`}
                </button>
                <a href="./ManMemberModify"><button className='manApply-btn-modify'>수정</button></a>
                <button className='manApply-btn-withdraw' onClick={() => handleWithdrawal(member.id)}>탈퇴</button>
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

export default ManApply


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