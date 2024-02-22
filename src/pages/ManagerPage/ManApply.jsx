import React,{ useEffect, useState } from 'react'
import './ManApply.css'
import Header from '../../components/Header'
import axios from 'axios';

function ManApply() {


  const PAGE_SIZE = 10; // 페이지당 표시할 멤버 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [members, setMembers] = useState([]);
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
    // 검색어를 소문자로 변환하여 일치하는 멤버를 찾습니다.
    const lowercaseSearch = search.toLowerCase();
    const filteredMembers = members.filter((member) =>
      member.gen.toLowerCase().includes(lowercaseSearch) ||
      member.department.toLowerCase().includes(lowercaseSearch) ||
      member.name.toLowerCase().includes(lowercaseSearch)
    );
    setMembers(filteredMembers);
    setSearch('');
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/members');
        console.log(response)
        if (response.data.success) {
          setMembers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);


  // 재학, 휴학
const handleToggleStatus = async (memberNo) => {
    try {
      const memberToUpdate = members.find((member) => member.memNo === memberNo);
          if (!memberToUpdate) {
            console.error('Member not found');
            return;
          }
  
      const newStatus = memberToUpdate.memState=== 'active' ? 'inactive' : 'active';
      const message = `${memberToUpdate.memName}님을 ${newStatus} 처리 하시겠습니까?`;
      const userResponse = window.confirm(message);
  
      if (userResponse) {
        const response = await axios.put(`https://dmu-dasom.or.kr:8090/members/${memberNo}`, {
          newStatus: newStatus,
        });
  
        if (response.data.success) {
          const updatedMembers = members.map((member) => {
            if (member.memNo === memberNo) {
              return { ...member, memState: newStatus };
            }
            return member;
          });
          setMembers(updatedMembers);
        } else {
          console.error('Failed to update member status');
        }
      }
    } catch (error) {
      console.error('Error toggling member status:', error);
    }
};
  
// 재학/졸업
const handleToggleGraduation = async (memberNo) => {
  try {
    const memberToUpdate = members.find((member) => member.memNo === memberNo);
    if (!memberToUpdate) {
      console.error('Member not found');
      return;
    }

    const memState = memberToUpdate.memState=== 'active' ? 'inactive' : 'active';
    const message = `${memberToUpdate.memName}님을 ${memState} 처리 하시겠습니까?`;
    const userResponse = window.confirm(message);

    if (userResponse) {
    console.log(memberNo)
      const response = await axios.patch(`https://dmu-dasom.or.kr:8090/${memberNo}`, {
        memState: memState,
      });

      if (response.data.success) {
        const updatedMembers = members.map((member) => {
          if (member.memNo === memberNo) {
            return { ...member, memState: memState };
          }
          return member;
        });
        setMembers(updatedMembers);
      } else {
        console.error('Failed to update member graduation');
      }
    }
  } catch (error) {
    console.error('Error toggling member graduation:', error);
  }
};
  // 탈퇴
  const handleWithdrawal = async (memberNo) => {
    try {
      const memberToRemove = members.find((member) => member.memNo === memberNo);
  
      if (memberToRemove) {
        const message = `${memberToRemove.memName}님을 탈퇴처리 하시겠습니까?`;
        const userResponse = window.confirm(message);
  
        if (userResponse) {
          const response = await axios.delete(`http://dmu-dasom.or.kr:8090/members/${memberNo}`);
  
          if (response.data.success) {
            setMembers((prevMembers) =>
              prevMembers.filter((member) => member.memNo !== memberNo)
            );
          } else {
            console.error('Failed to delete member');
          }
        }
      }
    } catch (error) {
      console.error('Error handling withdrawal:', error);
    }
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
          <button onClick={handleSearch}>
            <img src='./images/search.PNG' alt="검색" /></button>
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
               <li key={member.memNo}>
                  <div className='manApply-infogen'>{member.memNo}</div>
                  <div className='manApply-infodept'>{member.memDepartment}</div>
                  <div className='manApply-infoname'>{member.memName}</div>
                  <button
                    onClick={() => handleToggleStatus(member.memNO)}
                    className={member.memState === 'active' ? 'manApply-btn-attend' : 'manApply-btn-timeOff'}>
                  {member.memState}
                  </button>
                <button
                  onClick={() => handleToggleGraduation(member.memNo)}
                  className={member.memState === 'active' ? 'manApply-btn-ungraduated' : 'manApply-btn-graduated'}>
                  {member.memState}
                </button>
                  <button className='manApply-btn-withdraw' onClick={() => handleWithdrawal(member.memNO)}>탈퇴</button>
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