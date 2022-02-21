import axios from 'axios' 

import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS } from "../actionsTypes/usersActionsTypes";


 const registerUser =(newuser) => async(dispatch)=>{
    dispatch({
        type:REGISTER
    })

try {
    const {data} = await axios.post('/user/register',newuser)
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
    dispatch({
        type:LOGIN
    })

    try {
        const {data} = await axios.post('/user/login',user);
        
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
   
    const config ={
        headers:{
            Authorization:token
        }
        
    }
    dispatch({
        type:GET_PROFILE,
    })
    
    
    try {
     
       const {data} = await axios.get('/user/auth',config);
       dispatch({
           type:GET_PROFILE_SUCCESS,
           payload:data
       })
        
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload:error.response.data
        })
    }
}