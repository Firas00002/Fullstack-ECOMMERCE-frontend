import axios from 'axios' 

import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_LOGOUT, GET_LOGOUT_SUCCESS, GET_LOGOUT_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, ALL_USERS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from "../actionsTypes/usersActionsTypes";


 const registerUser =(newuser) => async(dispatch)=>{
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({
        type:REGISTER
    })

try {
    const {data} = await axios.post('/user/register',newuser,config)
    dispatch({
        type:REGISTER_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:REGISTER_FAIL,
        payload:error.response.data
    })

    
}



}

export default registerUser;



export const loginUser =(user) => async(dispatch)=>{
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({
        type:LOGIN
    })

    try {
        const {data} = await axios.post('/user/login',user,config);
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })

        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}


export const getProfile =(token) => async(dispatch)=>{
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({
        type:GET_PROFILE,
    })
    
    
    try {
     
       const {data} = await axios.get('/user/me',config);
       dispatch({
           type:GET_PROFILE_SUCCESS,
           payload:data.user
       })
        
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload:error.response.data
        })
    }
}




export const logoutUsers =(token) => async(dispatch)=>{
    let token=localStorage.removeItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({
        type:GET_LOGOUT,
    })
    
    
    try {
     
       await axios.get('/user/logout',config);
       dispatch({
           type:GET_LOGOUT_SUCCESS,
           
       })
        
    } catch (error) {
        dispatch({
            type:GET_LOGOUT_FAIL,
            payload:error.response.data
        })
    }
}



export const getAllUsers = () => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({ type: ALL_USERS_REQUEST });
    try {
      
      const { data } = await axios.get(`/user/admin/users`,config);
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data});
    }
  };



  // get  User Details
export const getUserDetails = (id) => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({ type: USER_DETAILS_REQUEST });
    try {
      
      const { data } = await axios.get(`/user/admin/users/${id}`,config);
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data});
    }
  };


  // Delete User
export const deleteUser = (id) => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      
  
      const { data } = await axios.delete(`/user/admin/users/${id}`,config);
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data,
      });
    }
  };

  // Update User
export const updateUser = (id, userData) => async (dispatch) => {
    let token=localStorage.getItem('token')
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      
  
      
  
      const { data } = await axios.put(
        `/user/admin/users/${id}`,
        userData,
        config
      );
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data,
      });
    }
  };
  