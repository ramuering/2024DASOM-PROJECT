import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './MyPage.css'
import { Link } from 'react-router-dom'

const Data= ({profile,hakgoa,gi,name,github})=>{
  return (
    <div>
      <div>{hakgoa}</div>
      <div>{gi}</div>
      <div>{name}</div>
      <div>{github}</div>
    </div>
  )
}

function MyPage() {
  return (
    <div>
      <Header />
      
      <div className='myPage'>MyPage</div>
      
      <table className='table'>
        <tr>
          <th className='dataHead'>학과</th>
          <td className='myData'><Data hakgoa='컴퓨터소프트웨어공학과'></Data></td>
        </tr>
        <tr>
          <th className='dataHead'>기수</th>
          <td className='myData'><Data gi='21기'></Data></td>
        </tr>
        <tr>
          <th className='dataHead'>이름</th>
          <td className='myData'><Data name='홍길동'></Data></td>
        </tr>
        <tr>
          <th className='dataHead'>깃허브</th>
          <td className='myData'><Data github='test'></Data></td>
        </tr>
      </table>
      <div className='fixMyDataBorder'>
        <Link to='/mypagemodify' className='fixMyDataFont'>내 정보 수정</Link>
      </div>
      
    </div>
  )
}

export default MyPage