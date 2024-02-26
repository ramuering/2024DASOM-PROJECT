import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer";
import "./About.css";
import axios from 'axios';

function About() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/members/index');
        console.log(response);
        if (response.data.success) {
          setMembers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const [currentPage, setCurrentPage] = useState('Lead');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className='about-container'>
        <div className='about'>
          <div className='about-main'>
            <div className='about-main-text-box'>
              <p className='about-main-text1'>DASOM</p>
              <p className='about-main-text2'>컴퓨터 공학부 IT 전공 동아리</p>
              <p className='about-main-text3'>32기 DASOM 소개</p>
            </div>
          </div>
          <div className='about-middle'>
            <div className='about-middle-text'>
              <p>개발의 즐거움과 함께하는 공간</p>
              <p>협업의 힘으로 다채로운 프로젝트에 도전하고 함께 성장하세요.</p>
            </div>
            <div className='about-DASOM'>
              <div className='about-D'>
                <div className='about-circle'>
                  <div className='about-initial'>
                    <p>D</p>
                  </div>
                </div>
                <p className='about-title'>Development</p>
                <p className='about-explanation'>여러 개발 분야에서 활동하며 부원들의<br />
                  개발 역량을 향상시키는 곳입니다.<br />
                  협업을 통해 혁신적인 솔루션을 찾고<br />
                  성장의 기회를 만나보세요.</p>
              </div>
              <div className='about-A'>
                <div className='about-circle'>
                  <div className='about-initial'>
                    <p>A</p>
                  </div>
                </div>
                <p className='about-title'>Algorithm</p>
                <p className='about-explanation'>소프트웨어의 핵심, 알고리즘에 집중하여<br />
                  깊이 있는 학습과 협업을 통해<br />
                  멋진 프로젝트를 만들어냅니다.</p>
              </div>
              <div className='about-S'>
                <div className='about-circle'>
                  <div className='about-initial'>
                    <p>S</p>
                  </div>
                </div>
                <p className='about-title'>Software</p>
                <p className='about-explanation'>소프트웨어 개발의 다양한 영역에<br />
                  관심을 가지고 있습니다.<br />
                  소프트웨어의 전반적인 과정을 경험하며<br />
                  실무적인 능력을 키워갑니다.</p>
              </div>
              <div className='about-O'>
                <div className='about-circle'>
                  <div className='about-initial'>
                    <p>O</p>
                  </div>
                </div>
                <p className='about-title'>innOvation</p>
                <p className='about-explanation'>혁신적인 아이디어와 열정을 통해 <br />
                  소프트웨어의 혁신을 <br />
                  함께 만들어가는 공간입니다.
                </p>
              </div>
              <div className='about-M'>
                <div className='about-circle'>
                  <div className='about-initial'>
                    <p>M</p>
                  </div>
                </div>
                <p className='about-title'>Mentorship</p>
                <p className='about-explanation'>부원들 간의 상호 멘토십을 통해<br />
                  지식을 전수하고 배우는 공간입니다.<br />
                  함께 성장하는 커뮤니티를 형성합니다.</p>
              </div>
            </div>
            <div className='about-members'>
              <p>다솜 활동 멤버</p>
              <Menu currentPage={currentPage} onPageChange={handlePageChange} />
              {currentPage === 'Lead' && <Lead members={members.filter(member => member.memRole === 'ROLE_PRESIDENT')} />}
              {currentPage === 'CoreMember' && <CoreMember members={members.filter(member => member.memRole === 'ROLE_MANAGER')} />}
              {currentPage === 'Member' && <Member members={members.filter(member => member.memRole === 'ROLE_MEMBER')} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Menu = ({ currentPage, onPageChange }) => {
  return (
    <div>
      <button className={currentPage === 'Lead' ? 'about-active' : 'about-button' }
        onClick={() => onPageChange('Lead')}>LEAD</button>
      <button className={currentPage === 'CoreMember' ? 'about-active' : 'about-button' }
        onClick={() => onPageChange('CoreMember')}>CORE MEMBER</button>
      <button className={currentPage === 'Member' ? 'about-active' : 'about-button' }
        onClick={() => onPageChange('Member')}>MEMBER</button>
    </div>
  );
};

const Lead = ({ members }) => {
  return (
    <div className='about-mem-list'>

      {members.map((member, index) => (
        <MemBox key={index} imageUrl={member.memProfilePic} name={member.memName} year={member.memRecNo} />
      ))}
    </div>
  );
};

const CoreMember = ({ members }) => {
  return (
    <div className='about-mem-list'>

      {members.map((member, index) => (
        <MemBox key={index} imageUrl={member.memProfilePic} name={member.memName} year={member.memRecNo} />
      ))}
    </div>
  );
};

const Member = ({ members }) => {
  return (
    <div className='about-mem-list'>

      {members.map((member, index) => (
        <MemBox key={index} imageUrl={member.memProfilePic} name={member.memName} year={member.memRecNo} />
      ))}
    </div>
  );
};

const MemBox = ({ imageUrl, name, year }) => {
  return (
    <div className='about-membox'>
      <div className='about-picture'>
        <img src={imageUrl} alt='프로필사진' />
      </div>
      <p className='about-mem-name'>{name}</p>
      <p className='about-mem-year'>{year} 기</p>
    </div>
  );
};

export default About;
