import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { createProductReducer, deleteProductReducer, getProductReducer, getProductsReducer, updateProductReducer } from './reducers/productReducer';
import { createSalesReducer, deleteSalesReducer, getSalesReducer, updateSalesReducer } from './reducers/salesReducer';
//import { deleteOrchardSale } from '../../../Cuetech-Server-main/Controllers/Operations/OrchardSales';
//import { getOrchardExpense, getOrchardExpenses } from '../../../Cuetech-Server-main/Controllers/Operations/OchardExpense';
import {GetAdminsReducer, GetCashiersReducer, UserDetailsReducer, userRegisterReducer, userSigninReducer} from './reducers/userReducer'
import { AdminDetailsReducer, AdminRegisterReducer, AdminSigninReducer } from './reducers/adminReducer';
import { CashierDetailsReducer, CashierRegisterReducer, CashierSigninReducer } from './reducers/cashierReducer';


const initialState={
    userSignin:{
      
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
    },
    adminSignin:{
      
        adminInfo:localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')): null
    },



};

 const reducer= combineReducers({
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    userDetails:UserDetailsReducer,
    adminSignin:AdminSigninReducer,
    adminRegister:AdminRegisterReducer,
    adminDetails:AdminDetailsReducer,
    getAdmins:GetAdminsReducer,
    getCashiers:GetCashiersReducer,
cashierSignin:CashierSigninReducer,
cashierRegister:CashierRegisterReducer,
cashierDetails:CashierDetailsReducer,
    getSales:getSalesReducer,
    createSale:createSalesReducer,
    deleteSale:deleteSalesReducer,
    updateSale:updateSalesReducer,
    createProduct:createProductReducer,
    getProducts:getProductsReducer,
    getProduct:getProductReducer,
    updateProduct:updateProductReducer,
    deleteProduct:deleteProductReducer
   
   
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store= createStore(reducer,initialState,compose(applyMiddleware(thunk)));


 export default store