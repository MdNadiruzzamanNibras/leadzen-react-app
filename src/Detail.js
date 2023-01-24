import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
const Detail = () => {
const {id} = useParams("")

    const [userdata, setUser] = useState({})
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/users/${id}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
    },[])
   
   console.log(userdata);
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className="card w-fit bg-base-100 shadow-xl">
           <div className='card-body'>
              <h2 className='text-3xl text-center mt-2'>{userdata?.company?.name}</h2>
              <h4 className=' text-center '><LanguageOutlinedIcon/>: <span className='text-xl'>{userdata.website}</span></h4>
              
               <div className='m-0'>
                <h4><ContactsIcon/>: <span className='text-2xl'> {userdata?.name}</span></h4>
                <h5><MailOutlineOutlinedIcon/>: {userdata.email}</h5>
                <h5><LocalPhoneOutlinedIcon/>: {userdata.phone}</h5> 
                <h5><BusinessOutlinedIcon/>: {userdata?.address?.street}, {userdata?.address?.city}. </h5>
               </div>
               
              </div>
        </div>
      </div>
    );
};

export default Detail;