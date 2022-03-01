import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../redux/actions/usersActions';


const Login = () => {
    const [email, setEmail] = useState ('');
     const [password, setPassword] = useState('');
     const dispatch =useDispatch();
     const {loading,token}=useSelector(state=>state.usersReducer)
     const HandleClick =(e) =>{
         e.preventDefault();
         const newuser={
             email,
             password,
         }
         dispatch(loginUser(newuser));

     }


  return <div>
      <Form>
          {
              loading? <h1>loading...</h1>
              : token ? <Redirect to='/products' ></Redirect>
              :
              <>
          
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

export default Login;
