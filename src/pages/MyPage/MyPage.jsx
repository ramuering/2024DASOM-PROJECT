import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MyPage.css'


function MyPage() {
    const [data, setData] = useState([])

    /*useEffect(() => {
        axios.get('/api/hello') //백엔드에서 받아온 주소
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);

    const Data= ()=>{

      var myData;
      return (
        <div>
          {data.map((item)=>{
            <div key={item.id}>{item[myData]}</div>
          })}
        </div>
      )
    }
    <Data className='mypage-myProfile' myData='profileImg'></Data>
    <td className='mypage-myData'><Data className='myHakgoa' myData='hakgoa'></Data></td>
    <td className='mypage-myData'><Data className='myGi' myData='gi'></Data></td>
    <td className='mypage-myData'><Data className='myName' myData='name'></Data></td>
    <td className='mypage-myData'><Data className='myGithub' myData='github'></Data></td>
    */

  return (
    <div>
      <div className='mypage-content'>
        <Header />
      <img className='mypage-myProfile' src='./images/myPage/profile.jpg'></img>

      <table className='mypage-table'>
        <tr>
          <td className='mypage-dataHead'>학과</td>
          <td className='mypage-myData'>컴퓨터소프트웨어공학과</td>
        </tr>
        <tr>
          <td className='mypage-dataHead'>기수</td>
          <td className='mypage-myData'>21기</td>
        </tr>
        <tr>
          <td className='mypage-dataHead'>이름</td>
          <td className='mypage-myData'>홍길동</td>
        </tr>
        <tr>
          <td className='mypage-dataHead'>깃허브</td>
          <td className='mypage-myData'>test</td>
        </tr>
      </table>
        <div className='fixMyDataBorder'>
          <Link to='/mypagemodify' className='fixMyDataFont'>내 정보 수정</Link>
        </div>
      </div>
      <div className='myPage-footer'>
      <Footer />
      </div>
   </div>
  )
}

export default MyPage
