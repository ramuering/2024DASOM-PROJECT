import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './MyPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MyPage() {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('/api/hello') // 백엔드에서 받아온 주소
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
//   }, []);

  const Data = ({ myData }) => {
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>{item[myData]}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className='mypage-content'>
        <Header />

        <div className='mypage-title'>My Page</div>
        <img className='mypage-myProfile' src='./images/myPage/profile.jpg' alt='Profile'></img>

        <table className='mypage-table'>
          <tbody>
            <tr>
              <th className='mypage-dataHead'>학과</th>
              <td className='mypage-myData'><Data myData='hakgoa' /></td>
            </tr>
            <tr>
              <th className='mypage-dataHead'>기수</th>
              <td className='mypage-myData'><Data myData='gi' /></td>
            </tr>
            <tr>
              <th className='mypage-dataHead'>이름</th>
              <td className='mypage-myData'><Data myData='name' /></td>
            </tr>
            <tr>
              <th className='mypage-dataHead'>깃허브</th>
              <td className='mypage-myData'><Data myData='github' /></td>
            </tr>
          </tbody>
        </table>
        <div className='fixMyDataBorder'>
          <Link to='/mypagemodify' className='fixMyDataFont'>내 정보 수정</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
