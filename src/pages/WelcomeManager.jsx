import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CarName from '../components/carName';

import { useDispatch, useSelector } from 'react-redux';
import SighnUp from './SighnUp';
import { signin } from '../redux/actions/userActions';




export default function WelcomeManager() {
 // const {user,isLoading,isError,isSuccess,message}= useSelector((state)=>state.auth);
 const userSignin= useSelector(state=>state.userSignin);
 const {userInfo,loading,success,error}= userSignin
 console.log(error)
    const navigate = useNavigate();
    const dispatch = useDispatch();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
async function submitForm(e) {
  e.preventDefault()

   
  dispatch(signin(email,password))
  

  
   
  }

  useEffect(() => {
    
    if (userInfo) {
      navigate("/ManagerMain")
    }

    }, [navigate,dispatch])
    
   // onClick={() => navigate("/Mainheader")}  

  return (
    <div className="flex items-center justify-center h-screen ">

  
    <form onSubmit={submitForm} className="w-3/4 p-6 bg-slate-800  shadow pb-40 pt-32 rounded-3xl">
   
    <div className='text-center bold text-white text-2xl '>Welcome to Takau Holdings</div>
    <div className='text-center mb-4 bold text-white text-sm '>
      <br />
      {
        
       ///This is subject to change.I have done this as an example of how do it with Redux you can do it in the way you are comfortable with.
       loading ? <h2>
         Loading....
       </h2> :
     error ? <h2>
       {error}
       </h2>
       : null
       
      }
     </div>
      <div className="flex flex-col flex-grow mt-2 mb-2">
      
        <label htmlFor="username" className="mb-1 flex  items-center text-white">Email:</label>
        <input onChange={(e)=>setemail(e.target.value)} type="text" id="username" name="username" required className="w-full p-2 border flex-grow  border-gray-400 bg-slate-800  rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow mt-2 mb-2">
        <label htmlFor="password" className="mb-1 flex items-center text-white ">Password:</label>
        <input    onChange={(e)=>setpassword(e.target.value)}  type="password" id="password" name="password" required className="w-full p-2 border  border-gray-400 bg-slate-800  rounded-xl" />
      </div>
      <div className=" text-white flex justify-center">
        <p className='flex items-center'>Do you have account?</p>
        <p className='flex items-center' onClick={() => navigate("/SighnUp")} >Sighn Up</p>
        <button type="submit"      className="px-4 py-2 bg-red-400 text-white rounded ">Log In</button>
      </div>
     </form>
  </div>
  )
}
