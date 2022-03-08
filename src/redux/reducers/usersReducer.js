import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_LOGOUT_SUCCESS, GET_LOGOUT_FAIL } from "../actionsTypes/usersActionsTypes";

const init = {
  loading: false,
  errors: null,
  users: null,
  token:null,
  isAuth:false,
};

const usersReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
      case LOGIN:
        case GET_PROFILE:
      return {
        ...state,
        loading: true,
        
        
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
        
      };
    case LOGIN_SUCCESS:
      return{
        ...state,
        loading:false,
        errors:null,
        users:payload.user,
        token:payload.token,
        isAuth:true
        
        

      } ; 
      case GET_LOGOUT_SUCCESS:
      return {
        loading: false,
        users: null,
        isAuth: false,
      };

      case GET_PROFILE_SUCCESS:
        return{
          ...state,
          loading:false,
          isAuth:true,
          users:payload,
          
          
        }
    case REGISTER_FAIL:
    case LOGIN_FAIL: 
    case GET_PROFILE_FAIL:
      case GET_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
        
        
      };

    default:
      return state;
  }
};

export default usersReducer;

