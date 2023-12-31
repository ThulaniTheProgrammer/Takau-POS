import { GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS } from "../constants/admin";
import { GET_CASHIERS_FAIL, GET_CASHIERS_REQUEST, GET_CASHIERS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SIGNOUT, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer=(state={},action)=>{
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading:true}
          
    case USER_SIGNIN_SUCCESS:
        return {loading:false,userInfo:action.payload};
        case USER_SIGNIN_FAIL:
            return {loading:false,error:action.payload};
            case USER_SIGNOUT:
                return {}
        
        default: return state
           ;
    }
}
export const userRegisterReducer=(state={},action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}
          
    case USER_REGISTER_SUCCESS:
        return {loading:false,userInfo:action.payload};
        case USER_SIGNIN_FAIL:
            return {loading:false,error:action.payload};

         
        default: return state
           ;
    }
}

export const UserDetailsReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {loading:true}
          
    case USER_DETAILS_SUCCESS:
        return {loading:false,user:action.payload};
        case USER_DETAILS_FAIL:
            return {loading:false,error:action.payload};

          
        default: return state
           ;
    }
}



export const GetAdminsReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case GET_ADMINS_REQUEST:
            return {loading:true}
          
    case GET_ADMINS_SUCCESS:
        return {loading:false,data:action.payload};
        case GET_ADMINS_FAIL:
            return {loading:false,error:action.payload};

          
        default: return state
           ;
    }
}
export const GetCashiersReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case GET_CASHIERS_REQUEST:
            return {loading:true}
          
    case GET_CASHIERS_SUCCESS:
        return {loading:false,data:action.payload};
        case GET_CASHIERS_FAIL:
            return {loading:false,error:action.payload};

          
        default: return state
           ;
    }
}
