import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getadmins } from '../../redux/actions/userActions';
import { useEffect } from 'react';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
 
  { field: 'phone', headerName: 'Phone', width: 90 },
  { field: 'email', headerName: 'Email', type: 'number', width: 5 },
  
  {
    
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const headerClassName = 'font-bold';

export default function Adminstrator() {
  const admins= useSelector((state)=>state.getAdmins);
  const dispatch= useDispatch()
  const {loading,error,data}= admins

let rows= data
 useEffect(()=>{
dispatch(getadmins())
  },[])

  
  return (
   

    <div className="h-400 w-full">
        <div className='flex justify-between mt-4 mb-4 mx-4'>
            <div className='text-2xl text-red-500'>
               Takau Holdings  Redistered Adminstrators
            </div>
            
            
            <Link to="/AddAdministrator" className='rounded-lg flex font-bold items-center text-white bg-pink-400 px-5'>Add Admistrator</Link>
            <Link to="/AddCashier" className='rounded-lg flex font-bold items-center text-white bg-pink-400 px-5'>Add Cashier</Link>
        </div>
        {
          loading ? <h2>
            Loading ....
          </h2> : error ? <h2>
            Error....
          </h2> :  <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerClassName, // Apply the headerClassName to each column
        }))}
        pageSize={5}
        getRowId={(row) => row._id}
        checkboxSelection
      />

        }
    
    </div>
   
  );
}