import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerUser from '../../redux/actions/usersActions'
import {Redirect} from 'react-router-dom'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import "./SignUp.css";
import Loading from '../layout/Loading/Loading';



const Register = () => {
     const [fullName, setFullName] = useState('');
     const [email, setEmail] = useState('');
     const [avatar, setAvatar] = useState("/Profile.png");
     const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
     const [password, setPassword] = useState('');
     const {loading,users}=useSelector(state=>state.usersReducer)
     const dispatch =useDispatch()
     const registerSubmit =(e) =>{
         e.preventDefault();
         const newuser={
             fullName,
             email,
             password,
             avatar,
         }
         dispatch(registerUser(newuser));

     }
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

  return (
    <>
    {loading?<Loading/>:users?<Redirect to="/login"/>:<>
    <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
            <div className="login_signUp_toggle">
                  <p >Register</p>
                  
                </div>
    <form className="loginForm"  onSubmit={registerSubmit}>
    <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="FullName"
                    required
                    
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="loginEmail">
                  <EmailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                
                <input type="submit" value="Register" className="loginBtn" />
              </form>
              </div>
              </div>
    </>}
    </>
  )
};

export default Register;
