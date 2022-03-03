import { Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { myOrders } from '../../redux/actions/ordersActions';
import Loading from '../layout/Loading/Loading';
import LaunchIcon from '@mui/icons-material/Launch';
import { DataGrid } from '@mui/x-data-grid';
import './MyOrders.css'
const MyOrders = () => {
    const dispatch = useDispatch();
  
    
  
    const { loading, orders } = useSelector((state) => state.myOrders);
    const { users } = useSelector(state=>state.usersReducer);
  
    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 150,
        flex: 0.5,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 150,
        flex: 0.3,
      },
  
      {
        field: "amount",
        headerName: "Amount",
        type: "number",
        minWidth: 270,
        flex: 0.5,
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
            <Link to={`/order/${params.getValue(params.id, "id")}`}>
              <LaunchIcon />
            </Link>
          );
        },
      },
    ];
    const rows = [];
  
    orders &&
      orders.forEach((item, index) => {
        rows.push({
          itemsQty: item.orderItems.length,
          id: item._id,
          status: item.orderStatus,
          amount: item.totalPrice,
        });
      });
  
    useEffect(() => {
      
  
      dispatch(myOrders());
    }, [dispatch]);
  
    return (
      <>
        
  
        {loading ? (
          <Loading />
        ) : (
          <div className="myOrdersPage">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="myOrdersTable"
              autoHeight
            />
  
            <Typography id="myOrdersHeading">{users.fullName}'s Orders</Typography>
          </div>
        )}
      </>
    );
  };
  
  export default MyOrders;