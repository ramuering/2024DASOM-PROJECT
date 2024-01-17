import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data'; 
import Header from '../../components/LimitHeader'
import "./NoticeDetail.css"

const NoticeDetail = () => {
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
    <div id="ND_main">
      <div id='ND_box'>
      <p id='ND_title'>{title}</p>
      <p id="ND_name">{name}</p>
      <p id="ND_contents">{contents}</p>
      </div>
    </div>
  );
};

export default NoticeDetail;