// import React, {useEffect, useState} from 'react'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
// import './MyPage.css'
// import { Link } from 'react-router-dom'
// import axios from 'axios'



//  function MyPage() {
//    const [data, setData] = useState([])

//      useEffect(() => {
//         axios.get('/api/hello') //백엔드에서 받아온 주소
//          .then(response => setData(response.data))
//          .catch(error => console.log(error))
//      }, []);

//      const Data= ()=>{

// <<<<<<< HEAD
//       var myData;
//       return (
//         <div>
//           {data.map((item)=>{
//             <div key={item.id}>{item[myData]}</div>
//           })}
//         </div>
//       )
//     }
//     <Data className='myProfile' myData='profileImg'></Data>
//     <td className='myData'><Data className='myHakgoa' myData='hakgoa'></Data></td>
//     <td className='myData'><Data className='myGi' myData='gi'></Data></td>
//     <td className='myData'><Data className='myName' myData='name'></Data></td>
//     <td className='myData'><Data className='myGithub' myData='github'></Data></td>
//     */

//   return (
//     <div>
//     <div className='mypage-content'>
//       <Header />
      
//       <div className='mypage-title'>My Page</div>
//       <img className='mypage-myProfile' src='./images/myPage/profile.jpg'></img>

//       <table className='mypage-table'>
//         <tr>
//           <th className='mypage-dataHead'>학과</th>
//           <td className='mypage-myData'>컴퓨터소프트웨어공학과</td>
//         </tr>
//         <tr>
//           <th className='mypage-dataHead'>기수</th>
//           <td className='mypage-myData'>21기</td>
//         </tr>
//         <tr>
//           <th className='mypage-dataHead'>이름</th>
//           <td className='mypage-myData'>홍길동</td>
//         </tr>
//         <tr>
//           <th className='mypage-dataHead'>깃허브</th>
//           <td className='mypage-myData'>test</td>
//         </tr>
//       </table>
//       <div className='fixMyDataBorder'>
//         <Link to='/mypagemodify' className='fixMyDataFont'>내 정보 수정</Link>
//       </div>
//     </div>
//     </div>
//   )
// }
// // import React, {useEffect, useState} from 'react'
// // import Header from '../../components/Header'
// // import Footer from '../../components/Footer'
// // import './MyPage.css'
// // import { Link } from 'react-router-dom'
// // import axios from 'axios'
// =======
//        var myData;
//        return (
//          <div>
//            {data.map((item)=>{
//              <div key={item.id}>{myData}</div>
//            })}
//          </div>
//        )
//      }
//      <><Data className='myProfile' myData='item.profile'></Data><td className='myData'><Data className='myHakgoa' myData='item.hakgoa'></Data></td><td className='myData'><Data className='myGi' myData='item.gi'></Data></td><td className='myData'><Data className='myName' myData='item.name'></Data></td><td className='myData'><Data className='myGithub' myData='item.github'></Data></td></>


//    return (
//      <div>
//      <div className='content'>
//        <Header />
// >>>>>>> fd09b95f4ac2682e4ff651f5ba613b693717f296

//        <div className='myPage'>My Page</div>
//        <img className='myProfile' src='./images/myPage/profile.jpg'></img>ㅞ

//        <table className='table'>
//          <tr>
//            <th className='dataHead'>학과</th>
//            <td className='myData'>컴퓨터소프트웨어공학과</td>
//          </tr>
//          <tr>
//            <th className='dataHead'>기수</th>
//            <td className='myData'>21기</td>
//          </tr>
//          <tr>
//            <th className='dataHead'>이름</th>
//            <td className='myData'>홍길동</td>
//          </tr>
//          <tr>
//            <th className='dataHead'>깃허브</th>
//            <td className='myData'>test</td>
//          </tr>
//        </table>
//        <div className='fixMyDataBorder'>
//          <Link to='/mypagemodify' className='fixMyDataFont'>내 정보 수정</Link>
//        </div>
//      </div>
//      </div>
//    )
//  }

// export default MyPage