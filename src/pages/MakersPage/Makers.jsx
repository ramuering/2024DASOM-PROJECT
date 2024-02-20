import React from 'react'
import './Makers.css'


const Member = ({ profile, name, gi }) => {
  return (
    <div className='makers-profileBox'>
      <div className='makers-profile'>
        <img src={profile} alt='프로필사진'></img>
      </div>
      <div className='makers-name'>
        {name}</div>
      <div className='makers-gi'>
        {gi}</div>
    </div>
  );
};

function Makers() {
  // 각 포지션별 멤버 데이터를 배열로 정의합니다.
  const leadMembers = [
    { profile: './images/myPage/hosungProfile.jpg', name: '남호성', gi: '29기' },
    // 다른 Lead 멤버들 추가
  ];

  const pmMembers = [
    { profile: './images/myPage/hosungProfile.jpg', name: '남호성', gi: '29기' },
    // 다른 PM 멤버들 추가
  ];

  const backMembers = [
    { profile: './images/myPage/basicProfile.jpeg', name: '김나리', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },
    { profile: './images/myPage/sinyoungProfile.png', name: '김신영', gi: '32기' },


    // 다른 Back 멤버들 추가
  ];

  const frontMembers = [
    { profile: './images/myPage/suhyunProfile.jpeg', name: '김수현', gi: '32기' },
    // 다른 Front 멤버들 추가
  ];

  const designMembers = [
    { profile: './images/myPage/hosungProfile.jpg', name: '남호성', gi: '29기' },
    // 다른 Design 멤버들 추가
  ];

  // 멤버를 렌더링하는 함수 정의
  const renderMembers = (members) => {
    return members.map((member, index) => (
      <Member key={index} profile={member.profile} name={member.name} gi={member.gi} />
    ));
  };

  return (
    <div className='makers-contents'>
      {/* 나머지 코드는 동일하게 유지 */}

       <div className='makers-body'>
              <div className='makers-position'>Lead</div><div className='makers-line1'></div>
              <div className='makers-member-grid'>
                {renderMembers(leadMembers)}
              </div>

              <div className='makers-position'>Pm</div><div className='makers-line2'></div>
              <div className='makers-member-grid'>
                {renderMembers(pmMembers)}
              </div>

        <div className='makers-position'>Back</div>
        <div className='makers-line3'>
        </div>
              <div className='makers-member-grid'>
                {renderMembers(backMembers)}
              </div>

              <div className='makers-position'>Front</div><div className='makers-line4'></div>
              <div className='makers-member-grid'>
                {renderMembers(frontMembers)}
              </div>

              <div className='makers-position'>Design</div><div className='makers-line5'></div>
              <div className='makers-member-grid'>
                {renderMembers(designMembers)}
              </div>
            </div>
    </div>
  )
}





export default Makers