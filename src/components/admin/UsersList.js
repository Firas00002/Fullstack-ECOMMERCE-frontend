import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser, getAllUsers } from '../../redux/actions/usersActions';

const UsersList = ({ history}) => {
    const dispatch = useDispatch();

   
  
    const {  users,isDeleted } = useSelector((state) => state.allUsersReducer);
  
    
  
    const deleteUserHandler = (id) => {
      dispatch(deleteUser(id));
    };
  
    useEffect(() => {
      
  
      if (isDeleted) {
        alert('User Deleted ');
        history.push("/admin/users");
        
      }
  
      dispatch(getAllUsers());
    }, [dispatch, history,isDeleted]);
  
    const columns = [
      { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },
  
      {
        field: "email",
        headerName: "Email",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "name",
        headerName: "Name",
        minWidth: 150,
        flex: 0.5,
      },
  
      {
        field: "role",
        headerName: "Role",
        type: "number",
        minWidth: 150,
        flex: 0.3,
        cellClassName: (params) => {
          return params.getValue(params.id, "role") === "admin"
            ? "greenColor"
            : "redColor";
        },
      },
  
      {
        field: "actions",
        flex: 0.3,
        headerName: "Actions",
        minWidth: 150,
        type: "number",
        sortable: false,
        renderCell: (params) => {
            return (
                <>
                  <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
                    <EditIcon />
                  </Link>
      
                  <Button
                    onClick={() =>
                      deleteUserHandler(params.getValue(params.id, "id"))
                    }
                  >
                    <DeleteIcon />
                  </Button>
                </>
              );
            },
          },
        ];
      
        const rows = [];
      
        users &&
          users.forEach((item) => {
            rows.push({
              id: item._id,
              role: item.role,
              email: item.email,
              name: item.fullName,
            });
          });
  return (
    <>
      

      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </>
  )
}

export default UsersList