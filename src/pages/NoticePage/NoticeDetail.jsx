import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data'; 
import "./NoticeDetail.css"
import axios from 'axios';

const NoticeDetail = () => {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  const [detailInfor, setDetailInfor] = useState([]);

  const getDetailInfor = async () => {
    try {
      const response = await axios.get('https://localhost:8090/notice/{noticeNo}');
      setDetailInfor(response.data);
      if (response.status === 200) {
        console.log('공지사항 상세 정보 가져오기 성공');
      } 
      else if (response.status === 404){
        console.log('해당하는 데이터 없음');
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

useEffect(() => {
  getDetailInfor();
}, []);

  const { id } = useParams();
console.log(id);// 콘솔에 id 출력

  // id에 해당하는 데이터 찾기
  const selectedData = data.find(item => item.id === parseInt(id, 10));
  console.log(selectedData); // 콘솔에 선택된 데이터 출력

  if (!selectedData) {
    return <p>Data not found</p>;
  }

  const { name, title, contents } = selectedData;

  return (
    <div id="ND-main">
      <div id='ND-box'>
      <p id='ND-title'>{title}</p>
      <p id="ND-name">{name}</p>
      <p id="ND-contents">{contents}</p>
      </div>
    </div>
  );
};

export default NoticeDetail;