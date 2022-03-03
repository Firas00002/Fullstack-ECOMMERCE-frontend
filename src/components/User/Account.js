import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../layout/Loading/Loading';

import "./Account.css";

const Account = () => {

    const {isAuth,users,loading}=useSelector(state=>state.usersReducer)
  return (
    <>
    {loading?<Loading/>:<>
    
   
          
    <div className="profileContainer">
      <div>
        <h1>My Profile</h1>
        <img src={users.avatar.url} alt={users.fullName} />
        <Link to="/me/update">Edit Profile</Link>
      </div>
      <div>
        <div>
          <h4>Full Name</h4>
          <p>{users.fullName} </p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{users.email}</p>
        </div>
        <div>
        <h4>Joined On</h4>
          <p>{String(users.createdAt).substr(0, 10)}</p>
        </div>
        <div>
          <Link to="/orders">My Orders</Link>
          
        </div>
        
      </div>
    </div>
  
</>}
    
    
    </>
  )
}

export default Account