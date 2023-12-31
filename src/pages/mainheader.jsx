import React from 'react'
import { Outlet, Link, Touchable } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Receipts from '../components/receipts';
import FinalReceipt from '../finalReceipt';
import { ImQrcode } from 'react-icons/im';
import Cart from '../components/cart';
import SearchComponent from '../components/searchComponet';
import { AiOutlineDown } from "react-icons/ai";
import ManagerMain from './ManagerMain';
import Product from '../pages/Products/Product';
import CarName from '../components/carName';



export default function Mainheader() {
  const colors = ["green","red","yellow"]
  function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
  }
  const randomNumber= getRandomNumber();
  console.log(colors[getRandomNumber()]);
  //colors[randomNumber()];

    let navigate = useNavigate();
  return (
  <div className='h-screen'>
     <div className='flex justify-between pt-4   w-full mb-8 mx-2'>
        <div className='flex flex-row w-3/4  justify-between'>
<div className='text-2xl font-bold text-black mr-12'>Takakou</div>
<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 '>
<h3 className='text-white items-center  flex justify-start pt-1'>  <ImQrcode className='pr-2 w-8' /> 
<input
        type="text"
        placeholder="Search Car Part"
        className='bg-white outline-white  focus:outline-none'

      />
 </h3>
</div>

<div className='rounded-lg border bg-white  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-white mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-white outline-white  focus:outline-none'

      />

<AiOutlineDown  className='flex justify-end text-slate-300' /> 

 </h3>
</div>


<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-white mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-white outline-white   focus:outline-none'

      />

<AiOutlineDown  className='pr-2 w-8 flex justify-end text-slate-300 ' /> 

 </h3>
</div>


<div className='rounded-lg border  border-slate-300 h-8 w-1/4 mx-2 flex'>
  <h3 className='text-white items-center  flex  justify-between  bg-white mx-1 pt-1'> 
  
<input
        type="int"
        placeholder="Year"
        className='bg-white outline-white  focus:outline-none'

      />

<AiOutlineDown  className='pr-2 w-8 flex justify-end text-slate-300 ' /> 

 </h3>
</div>


       </div>
       <div className='rounded-lg border  bg-slate-600  w-1/6 mx-8 bold text-center items-center flex justify-center bold text-white'>ADD</div>

    </div>



<div className='flex justify-between mr-6 font-semibold'>
<div className='mx-4'>
       <ul className='text-black'>
          <li className='my-4'>
            <Link to="/Menu">Menu</Link>
          </li>
          <li className='my-4'>
            <Link to="/SecondNav">Orders</Link>
          </li>
          <li className='my-4'>
            <Link to="/ManagerMain">Reports</Link>
          </li>
          <li className='my-4'>
            <Link to="/Product">Stock</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Settings</Link>
          </li>
          <li className='my-4'>
            <Link to="/Team">Users</Link>
          </li>
        </ul>

   </div>
 
 
 <div class="flex fixed top-0 left-0 flex-wrap h-80 justify-center ">
  {
    /** <CarName carname="Toyot" />
 <CarName carname="mazda"/>
 <CarName carname="Nissan"/>
 <CarName carname="Honda fit"/>
 <CarName carname="Xtrail"/>
 <CarName carname="Isuzu"/>
 <CarName carname="Rav 4"/>
 <CarName carname="Misthubishi"/>
 <CarName carname="Ford"/> */
  }


  

  <div class="border border-slate-400 ml-16   w-3/4"></div>
  {
    /**<Cart partname="Toyota Vits 2003 Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Steering" colorname={colors[getRandomNumber()]}/>
<Cart partname="Mazda Gearbox" colorname={colors[getRandomNumber()]} />
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/>
<Cart partname="Toyota Engine" colorname={colors[getRandomNumber()]}/> */
  }


  
  
  
 
 

</div>










<div className=''>
    <div >
        <p>Receipt Number</p>
    </div>
  
<Receipts partName="Gearbox" amount="$5"/>

<Receipts partName="Engine" amount="$7"/>

<Receipts partName="Gearbox" amount="$15"/>

<Receipts partName="Doors" amount="$12"/>

<FinalReceipt/>

    





    </div>


    </div>

    
   
</div>
  )
}