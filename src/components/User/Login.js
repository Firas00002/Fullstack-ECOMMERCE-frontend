import React, { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import "./SignUp.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions/usersActions';
import { useEffect } from 'react';
import Loading from '../layout/Loading/Loading';
const Login = ({history, location}) => {
  const [email, setEmail] = useState ('');
     const [password, setPassword] = useState('');
     const dispatch =useDispatch();
     const {loading,isAuth}=useSelector(state=>state.usersReducer)
     const loginSubmit =(e) =>{
         e.preventDefault();
         const newuser={
             email,
             password,
         }
         dispatch(loginUser(newuser));

     }

     const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    
    if (isAuth) {
      history.push(redirect);
    }
  }, [ history, isAuth, redirect]);
     

  return (
    <>
    {loading?<Loading />:
    <>
    <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
            <div className="login_signUp_toggle">
                  <p >LOGIN</p>
                  
                </div>
    <form className="loginForm"  onSubmit={loginSubmit}>
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
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              </div>
              </div>
    </>}
    </>
  )
}

export default Login