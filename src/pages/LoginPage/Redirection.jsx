import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Redirection = () => {
  const code =  window.location.search;

  //useEffect(() => {
    //console.log(process.env.REACT_APP_URL); // 인가코드 줄 곳
    //axios.post(`${process.env.REACT_APP_URL}Login${code}`) // 인가코드 넘기기
    //.then((r) => {
      //console.log(r.data);
      
      //<Link to='/loginSuccess'></Link>;
    //});
  //}, []);

  return (
  <div>
    <h1>1</h1>
    <div>로그인 중입니다.</div>
  </div>
  )
};

export default Redirection;