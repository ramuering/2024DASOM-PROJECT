    import React, { useEffect, useState } from 'react';
    import Header from '../../components/Header';
    import Footer from '../../components/Footer';
    import { Link } from 'react-router-dom';
    import axios from 'axios';
    import "./MyPage.css"

    // 쿠키에서 이름에 해당하는 값을 가져오는 함수
    function getCookie(name) {
        const cookieString = document.cookie;
        const cookies = cookieString.split('; ');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    function MyPage() {
        const [myPage, setMyPage] = useState({});

        useEffect(() => {
            const fetchMyPageInfo = async () => {
                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const refreshToken = getCookie('refreshToken');
                    const response = await axios.get('https://dmu-dasom.or.kr:8090/members/my-page', {
                        headers: {
                            Authorization: ` ${accessToken}`,
                            Cookie: `${refreshToken}`
                        }
                    });
                    if (response.data.success) {
                        setMyPage(response.data.data);
                        console.log(response)
                    }
                } catch (error) {
                    console.error('마이페이지 회원 정보 갖고오기 오류 :', error);
                }
            };
            fetchMyPageInfo();
        }, []);

      return (

        <div>
          <div className='mypage-content'>
            <Header />
            <div className='mypage-title'>MY PAGE</div>

          <img className='mypage-myProfile' style={{ backgroundImage: `url(${myPage.memProfilePic})` }}></img>

          <table className='mypage-table'>
            <tr>
              <td className='mypage-dataHead'>학과</td>
              <td className='mypage-myData'>{myPage.memDepartment}</td>
            </tr>
            <tr>
              <td className='mypage-dataHead'>기수</td>
              <td className='mypage-myData'>{myPage.memRecNo}기</td>
            </tr>
            <tr>
              <td className='mypage-dataHead'>이름</td>
              <td className='mypage-myData'>{myPage.memName}</td>
            </tr>
            <tr>
              <td className='mypage-dataHead'>깃허브</td>
              <td className='mypage-myData'></td>
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