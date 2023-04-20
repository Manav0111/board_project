import logo from './logo.svg';
import { FcGoogle} from "react-icons/fc";
import { BsApple} from "react-icons/bs";
import './App.css';
import { Dashboard } from './components/Dashboard';
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import { useEffect, useState } from 'react';



function App() {
const[value,setvalue]=useState("");







const handelclick=()=>{
  
  signInWithPopup(auth,provider).then((data)=>{

      setvalue(data.user.email);
      localStorage.setItem("email",data.user.email);

    
    })
}

useEffect(()=>{
  setvalue(localStorage.getItem("email"));
})

  return (

      <>
      {value?<Dashboard ></Dashboard>:
       <div className="w-full h-[100vh] flex   ">

       <div className=' hidden text-4xl  md:flex justify-center align-middle items-center bg-black text-white w-1/3 md:text-center md:text-6xl font-montserrat   py-72' ><h1 className='text-5xl font-bold ' >Board.</h1></div>
 
       <div className='w-[630px] ml-[2rem]  md:bg-slate-100 md:w-[630px] max-w-full md:py-24 md:ml-[12rem] ' >
         <div>
         <h1 className='text-4xl font-montserrat font-bold'>Sign In</h1>
         <p className='font-lato py-2 font-medium'>Sign in to your account</p>
         <div className=' flex flex-wrap gap-4 '>
           <div className='   flex justify-between align-center text-[#858585] font-montserrat  bg-[#FFFFFF] px-3 py-2 rounded-xl text-top'>
           <FcGoogle className='mx-2 my-1'/>
           <p><button type='button' onClick={handelclick}>Sign in with Google</button></p>
           </div>
           <span className='  px-8 '></span>
           <div className='  flex  justify-between align-center text-[#858585] font-montserrat  bg-[#FFFFFF] md:mt-0 py-2  px-3 rounded-xl'>
           <BsApple className='mx-2 my-1'/>
           <p>Sign in with Apple</p>
           </div>
         </div>
 
           <div className='bg-[#FFFFFF] w-10/12  my-8 py-8 px-10 rounded-xl ml-1' >
             <div >
             <h2 className='text-bold font-montserrat text-xl py-2 font-medium ' >Email Address</h2>
            <input type="text" className='text-black bg-[#F5F5F5] rounded-lg   w-[100%]  py-3  '   ></input>
             </div>
             <span className='py-2'></span>
             <div>
             <h2 className='text-bold font-montserrat text-xl py-2 font-medium'>Password</h2>
             <input type="password" className='text-black bg-[#EAEAEA] rounded-lg py-3  w-[100%]' ></input>
             <span className='text-[#346BD4] font-lato text-lg font-medium block py-2 mt-2'>Forgot Password ?</span>
             <button type='button' className='bg-[#000000] text-[#FFFFFF] text-center rounded-lg  w-[100%]  py-3 text-lg font-bold mt-2 ' >Sign In</button>
             </div>
           </div>
 
             <p className='ml-10 text-[#858585] text-lg md:ml-20'>Don't have an account? <span className='text-[#346BD4] font-lato text-lg'>Register here</span> </p>
         </div>
         <div>
 
         </div>
         </div> 
 
       
      </div>
       }
    
      </>



        

  );
}

export default App;
