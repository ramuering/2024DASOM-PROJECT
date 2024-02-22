import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from './data'; 
import "./NoticeAdminDetail.css"
import axios from 'axios';

const NoticeAdminDetail = () => {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

const deleteNotice = async()=>{
  if(window.confirm('게시글을 삭제하시겠습니까?')){
    await axios.delete(`http://localhost:8090/notice/{noticeNo}`)
    .then(()=>{
      <Link to="/Notice"></Link>
    })
  }
}

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
      <div id='ND-NameBox'>
      <p id="NDs-name">{name}</p>
      <div id='ND-LinkBox'>
      <Link to="../noticeupdate" className="ND-linkButton">공지수항 수정</Link>
      <div className="ND-linkButton1" onClick={deleteNotice}>공지사항 삭제</div>
      </div>
      </div>
      <p id="ND-contents">{contents}</p>
      </div>
    </div>
  );
};

export default NoticeAdminDetail;