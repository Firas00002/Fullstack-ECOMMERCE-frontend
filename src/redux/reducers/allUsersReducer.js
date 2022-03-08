import { ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../actionsTypes/usersActionsTypes";




const init={
    loading:false,
    users:[],
    user:{},
    isDeleted: false,
    isUpdated:false
}







export const allUsersReducer = (state = init, {type,payload}) => {
    switch (type) {
      case ALL_USERS_REQUEST:
        case USER_DETAILS_REQUEST:
            case DELETE_USER_REQUEST:
                case UPDATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: payload,
        };
        case USER_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
        };
        case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
         
        };
        case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };

  
      case ALL_USERS_FAIL:
        case USER_DETAILS_FAIL:
            case DELETE_USER_FAIL:
                case UPDATE_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
     
  
      default:
        return state;
    }
  };
  

  export default allUsersReducer;





  