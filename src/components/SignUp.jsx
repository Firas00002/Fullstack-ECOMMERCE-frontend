import React, { useState } from 'react';
import {Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import registerUser from '../redux/actions/usersActions'
import {Redirect} from 'react-router-dom'



const SignUp = () => {
     const [fullName, setFullName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const {loading,users}=useSelector(state=>state.usersReducer)
     const dispatch =useDispatch()
     const HandleClick =(e) =>{
         e.preventDefault();
         const newuser={
             fullName,
             email,
             password,
         }
         dispatch(registerUser(newuser));

     }

  return <div className= 'bigdiv' >
      <Form>
  
  {
   loading? <h1>.</h1>
   :users? <Redirect to="/signIn" > </Redirect>
   :
  
    <>
  <Form.Group className="mb-3" controlId="formBasicfullName">
    <Form.Label>FullName</Form.Label>
    <Form.Control type="text" placeholder="FullName" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={HandleClick}>
    Submit
  </Button>
  
  </>
  }
</Form>
  </div>;
};

export default SignUp;
