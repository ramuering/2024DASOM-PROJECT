import React from 'react'
import LimitHeader from "../../components/LimitHeader"
import './Login.css';
import { Link } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPj6z3yEcXMZnXhfPu1YMFM3zIKwLFdh8",
  authDomain: "dasom-login.firebaseapp.com",
  projectId: "dasom-login",
  storageBucket: "dasom-login.appspot.com",
  messagingSenderId: "595103046458",
  appId: "1:595103046458:web:fa37ce8c8ef7f6bf724e03",
  measurementId: "G-F95JBVQQN7"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const Login = ()=>{    

    const complet=(event)=>{
      event.preventDefault()

      const email = document.getElementsByClassName('login-id').value;
      const password = document.getElementsByClassName('login-password').value;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log('error')
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

    return(
      <div className='login-content'>
        <LimitHeader />
        <div className='dasom'>DASOM</div>
        <div className='login-member'>
        <div className='noMember'>회원이 아니신가요?</div>
        <Link to='/signup01' className='goMember'><div>회원가입 하기</div></Link>
        </div>
        <input type='email' className="login-id" placeholder='아이디' />
        <input type='password' className="login-password" placeholder='비밀번호'/>
        <button className='login-complet' onClick={complet}>완료</button>
      </div>
      
    )
    
}

export default Login