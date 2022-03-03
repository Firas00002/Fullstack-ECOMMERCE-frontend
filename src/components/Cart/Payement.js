import { Typography } from '@mui/material'
import React from 'react'
import CheckoutSteps from './CheckoutSteps'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./Payement.css";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions/ordersActions';
const Payement = ({history}) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  
  const dispatch =useDispatch()

  
  


  const submitHandler = (e) => {
    e.preventDefault();

    

   const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

      
          dispatch(createOrder(order));

          history.push("/success");
        
      
    
      };

  return (
    <>
      
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            
          </div>
          <div>
            <EventIcon />
            
          </div>
          <div>
            <VpnKeyIcon />
            
          </div>

          <input
            type="submit"
            
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  )
}

export default Payement