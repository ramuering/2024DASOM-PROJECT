import React,{ useState } from 'react'
import './ManApply.css'
import Header from '../../components/Header'

function ManApply() {

  const initialMembers = [
    { id: 1, gen: '31기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 2, gen: '31기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 3, gen: '31기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 4, gen: '31기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 5, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 6, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '졸업' },
    { id: 7, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '재학' },
    { id: 8, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '홍길동', status: '재학', graduation: '졸업' },
    { id: 9, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '김연아', status: '재학', graduation: '재학' },
    { id: 10, gen: '32기', department: '컴퓨터소프트웨어공학과', name: '손흥민', status: '재학', graduation: '재학' },
  ]

  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filteredMembers = initialMembers.filter(member => 
      member.gen.includes(search) ||
      member.department.includes(search) ||
      member.name.includes(search)
    );
    setMembers(filteredMembers);
  };

  const handleToggleStatus = (memberId) => {
    const updatedMembers = members.map((member) => {
      if (member.id === memberId) {
        const newStatus = member.status === '재학' ? '휴학' : '재학';
        const message = `${member.name}을(를) ${newStatus}처리 하시겠습니까?`;
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
          const message = `${member.name}을(를) ${newGraduation}처리 하시겠습니까?`;
          const userResponse = window.confirm(message);
          if (userResponse) {
            return { ...member, graduation: newGraduation };
          }
        }
        return member;
    });
    setMembers(updatedMembers);
  };

  return (
    <div className='manApply'>
      <Header />
      <p className='manApply-title'>회원 관리</p>
      <div className='manApply-searchBar'>
        <input type="text" placeholder='검색어를 입력하세요' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className='manApply-memList'>
        <div className='manApply-listTitle'>
          <p className='manApply-gen'>기수</p>
          <p className='manApply-department'>학과</p>
          <p className='manApply-name'>이름</p>
          <p className='manApply-absence'>휴・복학</p>
          <p className='manApply-graduation'>졸업</p>
          <p className='manApply-modify'>수정</p>
          <p className='manApply-withdraw'>탈퇴</p>
        </div>
        <ul>
          {members.map(member => (
            <li key={member.id}>
              <div className='manApply-infogen'>{`${member.gen}`}</div> {`${member.department}`} {`${member.name}`}
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
    </div>
  )
}

export default ManApply
