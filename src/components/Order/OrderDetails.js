import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrderDetails } from '../../redux/actions/ordersActions';
import './OrderDetails.css'

const OrderDetails = ({match}) => {
    const { myOrder } = useSelector((state) => state.ordersReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        
    
        dispatch(getOrderDetails(match.params.id));
      }, [dispatch, match.params.id]);
  return (
    <>
    <>
    
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{myOrder && myOrder._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>FullName:</p>
                  <span>{myOrder.user && myOrder.user.fullName}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {myOrder.shippingInfo && myOrder.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {myOrder.shippingInfo &&
                      `${myOrder.shippingInfo.address}, ${myOrder.shippingInfo.city}, ${myOrder.shippingInfo.state}, ${myOrder.shippingInfo.pinCode}, ${myOrder.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      myOrder.paymentInfo &&
                      myOrder.paymentInfo.status === "succeeded"
                        ? "redColor"
                        : "greenColor"
                    }
                  >
                    {myOrder.paymentInfo &&
                    myOrder.paymentInfo.status === "succeeded"
                      ? "NOT PAID"
                      : "PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{myOrder.totalPrice && myOrder.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      myOrder.orderStatus && myOrder.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {myOrder.orderStatus && myOrder.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {myOrder.orderItems &&
                  myOrder.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X {item.price}$ ={" "}
                        <b>{item.price * item.quantity}$</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
    
    </>
    </>
  )
}

export default OrderDetails