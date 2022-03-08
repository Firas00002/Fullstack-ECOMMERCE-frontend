import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUser } from '../../redux/actions/usersActions';
import Loading from '../layout/Loading/Loading';
import Sidebar from './Sidebar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const UpdateUser = ({match,history}) => {
    const dispatch = useDispatch();
    
  
    const { loading, user ,isUpdated,} = useSelector((state) => state.allUsersReducer);
  
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
  
    const userId = match.params.id;
  
    useEffect(() => {
      if (user && user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.fullName);
        setEmail(user.email);
        setRole(user.role);
      }
      
  
      if (isUpdated) {
        alert("User Updated Successfully");
        history.push("/admin/users");
       
      }
    }, [dispatch,  history, isUpdated, user, userId]);
  
    const updateUserSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("fullName", name);
      myForm.set("email", email);
      myForm.set("role", role);
  
      dispatch(updateUser(userId, myForm));
    };
  return (
    <>
      
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          {loading ? (
            <Loading/>
          ) : (
            <form
              className="createProductForm"
              onSubmit={updateUserSubmitHandler}
            >
              <h1>Update User</h1>

              <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <VerifiedUserIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={
                  loading ? true : false || role === "" ? true : false
                }
              >
                Update
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default UpdateUser