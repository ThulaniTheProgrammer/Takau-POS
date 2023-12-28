import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminregister } from '../../redux/actions/adminActions';


export default function AddAdministrator() {

 
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")

  const adminRegister= useSelector((state)=>state.adminRegister);
  const {loading,error,adminInfo}= adminRegister
  console.log(adminRegister);
 

 
  const navigate = useNavigate();
  const dispatch = useDispatch();

function submit(e){
  e.preventDefault();
  dispatch(adminregister(email,phone,password,name))
}

 
  useEffect(() => {
   
    if (adminInfo) {
    alert("Adminstrator has been registered succesfully now you are being redirected to the admins page")
    navigate("/Adminstrator")
    window.location.reload()
    }
   
    
  
    }, [adminInfo,navigate,dispatch])
    

  return (
   
    <div className="flex items-center justify-center h-screen">
      { //Display loading, error, or success messages based on authentication state 
      
        loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h2>Error....</h2>
      ) : null
      
      }
      <form  onSubmit={submit} className="w-3/4 p-6 bg-slate-100 shadow pb-40 pt-32 rounded-3xl">
        <div className="text-center bold text-black text-2xl">Takau Holdings Register Cashier</div>

        <div className="flex">
        <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
               Full Name:
            </label>
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Email:
            </label>
            <input
onChange={(e)=>setemail(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
         
         
        
        

        </div>

       <div className="flex">
    
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Phone:
            </label>
            <input
              onChange={(e) => setphone(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-grow mt-8 w-1/2 mr-4">
            <label htmlFor="name" className="mb-1 flex items-center text-black">
              Password:
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-400 bg-slate-100 rounded-xl"
            />
          </div>
         
        </div>
        <div >
          <button className='flex justify-center mt-10 rounded-3xl  bg-pink-700 text-white font-bold py-4 px-4' >Add AddAdimstrator</button>
    
          </div>

        

         </form>




    </div>
  );
}
