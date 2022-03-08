import { ADD_TOCART, REMOVE_CART_ITEMS, SAVE_SHIPPING_INFO } from "../actionsTypes/cartActionsTypes";










  const cartReducer = (state = {cartItems: [],shippingInfo:{}}, { type, payload }) => {
      switch (type) {
          case ADD_TOCART:
              
              
                const item = payload;

                const isItemExist = state.cartItems.find(
                  (i) => i.product === item.product
                );
          
                if (isItemExist) {
                  return {
                    ...state,
                    
                    cartItems: state.cartItems.map((i) =>
                      i.product === isItemExist.product ? item : i
                    ),
                  };
                } else {
                  return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                  };
                }
                case REMOVE_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== payload),
      };
          
      case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: payload,
      };
      
          default:
              return state;
      }



  }




  export default cartReducer;
  