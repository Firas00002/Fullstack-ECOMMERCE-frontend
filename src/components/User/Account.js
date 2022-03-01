import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Account.css";

const Account = () => {

    const {isAuth,token,user}=useSelector(state=>state.usersReducer)
  return (
    <>
    <>
    
   
          
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src="https://les-comptoirs-du-soin.fr/wp-content/uploads/2019/07/peeling-visage-homme-dermo-peel.jpg" alt='hi' />
              
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>hello </p>
              </div>
              <div>
                <h4>Email</h4>
                <p>user</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>user</p>
              </div>

              <div>
                
              </div>
            </div>
          </div>
        
    </>
    
    </>
  )
}

export default Account