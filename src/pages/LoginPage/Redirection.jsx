import { useEffect } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
    const code =  window.location.search;
    const navigate = useNavigate();
  
    //useEffect(() => {
      //console.log(process.env.REACT_APP_URL); // 인가코드 줄 곳
      //axios.post(`${process.env.REACT_APP_URL}Login${code}`) // 인가코드 넘기기
      //.then((r) => {
        //console.log(r.data);
  
        // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
        //localStorage.setItem('name', r.data.user_name); // 이름 저장.
        
        //navigate('/loginSuccess');
      //});
    //}, []);
  
    return <div>로그인 중입니다.</div>;
  };
  
  export default Redirection;