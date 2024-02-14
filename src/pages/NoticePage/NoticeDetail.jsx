import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data'; 
import "./NoticeDetail.css"

const NoticeDetail = () => {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

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