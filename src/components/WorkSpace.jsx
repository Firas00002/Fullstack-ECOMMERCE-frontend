/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProfile } from '../redux/actions/usersActions';

const WorkSpace = () => {
    const {isAuth,token}=useSelector(state=>state.usersReducer)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getProfile(token))
      
    }, []);
    
  
  
  
  return <div>
      {
          !isAuth ? <Redirect to='/signIn' ></Redirect>
          : <h1>hello</h1>
      }
      
  </div>;
};

export default WorkSpace;
