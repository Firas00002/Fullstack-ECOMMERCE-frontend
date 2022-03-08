import React, { useEffect } from 'react'
import Sidebar from "./Sidebar.js"
import "./Dashboard.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProduct } from '../../redux/actions/productsActions.js';
import { getAllOrders } from '../../redux/actions/ordersActions.js';
import { getAllUsers } from '../../redux/actions/usersActions.js';


const Dashboard = () => {
const dispatch=  useDispatch()
    const { allproducts } = useSelector(
        (state) => state.productsReducer
      );
      const { orders } = useSelector(
        (state) => state.ordersReducer
      );

      let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });
   
      const {  users} = useSelector((state) => state.allUsersReducer);
      useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
      }, [dispatch]);
   
  return (
    <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> {totalAmount} $
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{allproducts && allproducts.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        
      </div>
    
    </div>
  )
}

export default Dashboard