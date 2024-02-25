import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./NoticeDetail.css"
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../../components/Footer';

const NoticeDetail = () => {
  const { noticeNo } = useParams();
  const [noticeDetail, setNoticeDetail] = useState([]);
  useEffect(() => {
    const getDetailInfor = async () => {
      try {
        const response = await axios.get(`https://dmu-dasom.or.kr:8090/notice/${noticeNo}`);
        setNoticeDetail(response.data.data);
        if (response.status === 200) {
          console.log('공지사항 상세 정보 가져오기 성공');
        }
        else if (response.status === 404) {
          console.log('해당하는 데이터 없음');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };
    getDetailInfor();
  }, [noticeNo]);

  return (
    <Container>
      {noticeDetail ?(
          <>
          <div id="ND-main">
          <div id='ND-box'>
          <p id='ND-title'>{noticeDetail.title}</p>
          <p id="ND-name">{noticeDetail.name}</p>
          <p id="ND-contents">{noticeDetail.contents}</p>
      </div>
    </div>
          </>
      ) : (
          <div>공지사항 상세페이지 불러오는 중..</div>
      )}
      <Footer />
    </Container>
    
  );
};

export default NoticeDetail;


const Container = styled.main`
    position: relative;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`;