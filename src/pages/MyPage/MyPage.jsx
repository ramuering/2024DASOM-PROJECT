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
        const [myPage, setMyPage] = useState();

        useEffect(() => {
            const fetchMyPageInfo = async () => {
                try {
                    const accessToken = localStorage.getItem('accessToken'); // 로컬스토리지에서 엑세스 토큰 가져오기
                    const refreshToken = getCookie('refreshToken'); // 쿠키에서 리프레시 토큰 가져오기
                    console.log("엑세스: " + accessToken)
                    console.log("리프레쉬:" +  refreshToken)
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