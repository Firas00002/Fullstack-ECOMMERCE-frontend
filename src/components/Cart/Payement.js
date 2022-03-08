import { Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckoutSteps from './CheckoutSteps'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./Payement.css";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions/ordersActions';

import Loading from '../layout/Loading/Loading';

const Payement = ({history}) => {
  const [rip, setRip] = useState('')
  const [date, setDate] = useState('')
  const [ripPassword, setRipPassword] = useState('')
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  
  

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { users,loading } = useSelector((state) => state.usersReducer);
 

  

  

  const submitHandler = async (e) => {
    e.preventDefault();

    const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    users:users.fullName
  };

    

          dispatch(createOrder(order));

          history.push('/success')

  }

  
  return (
    <>
      {loading?<Loading/>:localStorage.getItem('token')?<><CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <input 
            className="paymentInput"
            type='text' placeholder='RIP'
            value={rip}
            onChange={(e)=>setRip(e.target.value)}
            />
            
          </div>
          <div>
            <EventIcon />
            <input 
            className="paymentInput"
            type='text' placeholder='Date'
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            />
          </div>
          <div>
            <VpnKeyIcon />
            <input 
            className="paymentInput"
            type='text' placeholder='RIP Password'
            value={ripPassword}
            onChange={(e)=>setRipPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value={`Pay - ${orderInfo && orderInfo.totalPrice}$`}
            
            className="paymentFormBtn"
          />
        </form>
      </div></>:null}
      
      
    </>
  )
}

export default Payement