import React from 'react'
import './Header.css'
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {useHistory} from 'react-router-dom'
import { logoutUsers } from '../../../redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from "@material-ui/core/Backdrop";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserOptions = ({users}) => {
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch=useDispatch()
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        {
          icon: (
            <ShoppingCartIcon
              style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
            />
          ),
          name: `Cart(${cartItems.length})`,
          func: cart,
        },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    
      ];

      if (users.role === "admin") {
        options.unshift({
          icon: <DashboardIcon />,
          name: "Dashboard",
          func: dashboard,
        });
      }
    
      function dashboard() {
        history.push("/admin/dashboard");
      }
    
      function orders() {
        history.push("/orders");
      }
      function account() {
        history.push("/account");
      }
      function cart() {
        history.push("/cart");}
      
      function logoutUser() {
        dispatch(logoutUsers())
        history.push('/')
      }
  return (
    <>
    <Backdrop open={open} style={{ zIndex: "10" }} />
    <SpeedDial
    ariaLabel="SpeedDial tooltip example"
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    style={{ zIndex: "11" }}
    open={open}
    direction="down"
    className="speedDial"
    icon={
        <img
          className="speedDialIcon"
          src={users.avatar.url ? users.avatar.url : "/Profile.png"}
          alt="Profile"
        />
      }
    >

{options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}

    </SpeedDial>
    
    </>
  )
}

export default UserOptions