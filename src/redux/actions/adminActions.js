import axios, { Axios } from 'axios'

import { ADMIN_DETAILS_FAIL, ADMIN_DETAILS_REQUEST, ADMIN_DETAILS_SUCCESS, ADMIN_REGISTER_FAIL, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNOUT } from '../constants/admin';
import { baseUrl } from './baseUrl';
export const adminsignin= (email,password)=>async(dispatch)=>{
    
    
    dispatch({type:ADMIN_SIGNIN_REQUEST,payload:{email,password}})
    try {
        const {data}= await axios.post(`${baseUrl}admin/signin`,{email,password});
        dispatch({type:ADMIN_SIGNIN_SUCCESS,payload:data});
        localStorage.setItem("adminInfo",JSON.stringify(data))
    } catch (error) {
        console.log(error);
        dispatch({type:ADMIN_SIGNIN_FAIL,
        payload:
        error.response.data.msg&& error.response.data.message
        ? error.response.data.message
        : error.message
        })
    }
}







export const adminregister=(email,phone,password,name)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}=getState()
    dispatch({type:ADMIN_REGISTER_REQUEST,payload:{email,phone,password,name}})
try {
    const {data}=await axios.post(`${baseUrl}admin/signup`,{email,phone,password,name},{
        headers:{
            Authorization:`Bearer ${userInfo.signature}`
        }
    })

dispatch({type:ADMIN_REGISTER_SUCCESS,payload:data})


} catch (error) {
    dispatch({
        type:ADMIN_REGISTER_FAIL,
    payload:error.response &&
    error.response.data.message?error.response.data.message
    :error.message
    })
}
}



export const adminsignout=()=>(dispatch)=>{
    localStorage.removeItem('adminInfo')

    dispatch({
        type:ADMIN_SIGNOUT
    })
}




export const admindetails=()=>async (dispatch,getState)=>{
    dispatch({type:ADMIN_DETAILS_REQUEST});

    const {adminSignin:{adminInfo}}= getState();
   
  
  

    try {
       const {data}=await axios.get(`http://localhost:5000/api/v1/me/`,{
        headers:{  
           
            Authorization:`Bearer ${adminInfo.token}`
    }
       } ) 
       dispatch({type:ADMIN_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        const message=error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:ADMIN_DETAILS_FAIL,payload: message})
    }
}



