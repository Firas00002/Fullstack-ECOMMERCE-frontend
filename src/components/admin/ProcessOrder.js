import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrderDetails, updateOrder } from '../../redux/actions/ordersActions';
import { UPDATE_ORDER_RESET } from '../../redux/actionsTypes/orderActionsTypes';
import Loading from '../layout/Loading/Loading';
import Sidebar from './Sidebar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './ProcessOrder.css'

const ProcessOrder = ({match}) => {
    const { myOrder, loading , isUpdated} = useSelector((state) => state.ordersReducer);
  

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(match.params.id, myForm));
  };

  const dispatch = useDispatch();
  

  const [status, setStatus] = useState("");

  useEffect(() => {
    
    if (isUpdated) {
      alert("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, match.params.id, isUpdated]);
  return (
    <>
      
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          {loading ? (
            <Loading />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: myOrder.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
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
                          :"PAID" }
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
                <div className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
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
              {/*  */}
              <div
                style={{
                  display: myOrder.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {myOrder.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {myOrder.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProcessOrder