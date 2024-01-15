import React,{ useState } from 'react'
import './ManMember.css'
import Header from '../../components/Header'

function ManMember() {

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
    setMembers(prevMembers => {
      return prevMembers.map(member => {
        if (member.id === memberId) {
          return { ...member, status: (member.status === '재학' ? '휴학' : '재학') };
        }
        return member;
      });
    });
  };

  const handleToggleWithdrawal = (memberId) => {
    setMembers(prevMembers => {
      const indexToRemove = prevMembers.findIndex(member => member.id === memberId);
      const updatedMembers = [...prevMembers];
      updatedMembers.splice(indexToRemove, 1);
      return updatedMembers;
    }
  )};

  const handleToggleGraduation = (memberId) => {
    setMembers(prevMembers => {
      return prevMembers.map(member => {
        if (member.id === memberId) {
          const newGraduation = member.graduation === '재학' ? '졸업' : '재학';
          return { ...member, graduation: newGraduation };
        }
        return member;
      });
    });
  };

  return (
    <div className='manMember'>
      <Header />
      <p className='manMember-title'>회원 관리</p>
      <div className='manMember-searchBar'>
        <input type="text" placeholder='검색어를 입력하세요' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className='manMember-memList'>
        <div className='manMember-listTitle'>
          <p>기수</p>
          <p>학과</p>
          <p>이름</p>
          <p>휴・복학</p>
          <p>졸업</p>
          <p>수정</p>
          <p>탈퇴</p>
        </div>
        <ul>
          {members.map(member => (
            <li key={member.id}>
              {`${member.gen} ${member.department} ${member.name}`}
              <button onClick={() => handleToggleStatus(member.id)} className={member.status === '재학' ? 'manMember-attend' : 'manMember-timeOff'}>
                {`${member.status}`}
              </button>
              <button onClick={() => handleToggleGraduation(member.id)} className={member.graduation === '재학' ? 'manMember-ungraduated' : 'manMember-graduated'}>
                {`${member.graduation}`}
              </button>
              <a href="./ManMemberModify"><button className='manMember-modifybtn'>수정</button></a>
              <button className='manMember-withdraw' onClick={handleToggleWithdrawal}>탈퇴</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ManMember