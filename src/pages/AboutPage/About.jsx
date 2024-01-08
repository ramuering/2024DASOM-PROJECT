import React, {useState} from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./About.css"

function About() {

  const [currentPage, setCurrentPage] = useState('Lead');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <Header />
      <div className='about'>
        <div className='main'>
          <div className='main-text-box'>
            <p className='main-text1'>DASOM</p>
            <p className='main-text2'>컴퓨터 공학부 IT 전공 동아리</p>
            <p className='main-text3'>32기 DASOM 소개</p>
          </div>
        </div>
        <div className='middle'>
          <div className='middle-text'>
            <p>개발의 즐거움과 함께하는 공간</p>
            <p>협업의 힘으로 다채로운 프로젝트에 도전하고 함께 성장하세요.</p>
          </div>
          <div className='DASOM'>
            <div className='D'>
              <div className='circle'>
                <div className='initial'>
                  <p>D</p>
                </div>
              </div>
              <p className='title'>Development</p>
              <p className='explanation'>여러 개발 분야에서 활동하며 부원들의<br />
              개발 역량을 향상시키는 곳입니다.<br />
              협업을 통해 혁신적인 솔루션을 찾고<br />
              성장의 기회를 만나보세요.</p>
            </div>
            <div className='A'>
              <div className='initial'>
                <p>A</p>
              </div>
            </div>
            <div className='S'>
              <div className='circle'>
                <div className='initial'>
                  <p>S</p>
                </div>
              </div>
              <p className='title'>Software</p>
              <p className='explanation'>소프트웨어 개발의 다양한 영역에<br />
              관심을 가지고 있습니다.<br />
              소프트웨어의 전반적인 과정을 경험하며<br />
              실무적인 능력을 키워갑니다.</p>
            </div>
            <div className='O'>
              <div className='initial'>
                <p>O</p>
              </div>
            </div>
            <div className='M'>
              <div className='circle'>
                <div className='initial'>
                  <p>M</p>
                </div>
              </div>
              <p className='title'>Mentorship</p>
              <p className='explanation'>부원들 간의 상호 멘토십을 통해<br />
              지식을 전수하고 배우는 공간입니다.<br />
              함께 성장하는 커뮤니티를 형성합니다.</p>
            </div>
          </div>
          <div className='members'>
            <p>다솜 활동 멤버</p>
            <Menu currentPage={currentPage} onPageChange={handlePageChange} />
            {currentPage === 'Lead' && <Lead />}
            {currentPage === 'CoreMember' && <CoreMember />}
            {currentPage === 'Member' && <Member />}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

const Menu = ({ currentPage, onPageChange }) => {
  return (
    <div>
      <button className={currentPage === 'Lead' ? 'active' : '' }
              onClick={() => onPageChange('Lead')}>LEAD</button>
      <button className={currentPage === 'CoreMember' ? 'active' : '' }
              onClick={() => onPageChange('CoreMember')}>CORE MEMBER</button>
      <button className={currentPage === 'Member' ? 'active' : '' }
              onClick={() => onPageChange('Member')}>MEMBER</button>
    </div>
  );
};

const Lead = () => {
  return (
    <div className='mem-list'>
      <h2>lead</h2>
      {/* 내용 추가 */}
    </div>
  );
};

const CoreMember = () => {
  return (
    <div className='mem-list'>
      <h2>core</h2>
      {/* 내용 추가 */}
    </div>
  );
};

const Member = () => {
  return (
    <div className='mem-list'>
      <h2>member</h2>
      {/* 내용 추가 */}
    </div>
  );
};



export default About