import React from 'react'
import { useState, useRef } from "react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import "./SignUp.css";
import registerUser, { loginUser } from '../../redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Loading from "../layout/Loading/Loading";

function SignUp() {
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading,users,token,isAuth}=useSelector(state=>state.usersReducer)
    const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  const dispatch=useDispatch()
    const switchTabs = (e, tab) => {
      if (tab === "login") {
        switcherTab.current.classList.add("shiftToNeutral");
        switcherTab.current.classList.remove("shiftToRight");
  
        registerTab.current.classList.remove("shiftToNeutralForm");
        loginTab.current.classList.remove("shiftToLeft");
      }
      if (tab === "register") {
        switcherTab.current.classList.add("shiftToRight");
        switcherTab.current.classList.remove("shiftToNeutral");
  
        registerTab.current.classList.add("shiftToNeutralForm");
        loginTab.current.classList.add("shiftToLeft");
      }
    };

    const registerDataChange = (e) => {
      if (e.target.name === "avatar") {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };
  
        reader.readAsDataURL(e.target.files[0]);
      } 
    };
     
    const loginSubmit =(e) =>{
      e.preventDefault();
      const newuser={
          email,
          password,
      }
      dispatch(loginUser(newuser));

  }

    const registerSubmit =(e) =>{
      e.preventDefault();
      
      const newuser={
          fullName,
          email,
          password,
          avatar
          
      }
      dispatch(registerUser(newuser));
    }
  return (
    <>
{loading ?  <Loading />:token? <Redirect to='/account'/> :<> 
    
    <div className="LoginSignUpContainer">
         <div className="LoginSignUpBox">
           <div>
             <div className="login_signUp_toggle">
               <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
               <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
             </div>
             <button ref={switcherTab}></button>
           </div>
           <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
             <div className="loginEmail">
               <EmailIcon />
               <input
                 type="email"
                 placeholder="Email"
                 required
                 value={loginEmail}
                 onChange={(e) => setLoginEmail(e.target.value)}
               />
             </div>
             <div className="loginPassword">
               <LockOpenIcon/>
               <input
                 type="password"
                 placeholder="Password"
                 required
                 value={loginPassword}
                 onChange={(e) => setLoginPassword(e.target.value)}
               />
               
             </div>
             <p className='password' style={ {marginLeft:'280px' , cursor:'pointer'}} >Forget Password ?</p>
             <input type="submit" value="Login" className="loginBtn" />
           </form>
           <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="FullName"
                    required
                   
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)}
                  />
                </div>
                <div className="signUpEmail">
                  <EmailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>

                
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
          
         </div>
       </div>
    
    </> } 
    
 
 </>
  )
}

export default SignUp