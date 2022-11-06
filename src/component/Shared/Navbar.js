import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Navbar.css'
import auth from '../../firebase.init';

const Navbar = () => {

  const [user] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  

    
  
   
       
  
 
        const menuitems=
        <>
        <li className='text-white font-bold text-1xl  mx-2'>
        <Link to="/home">  HOME </Link></li>
        <li className='text-white font-bold text-1xl  mx-2'>
        <Link to="/gallery">  GALLERY </Link></li>
        <li className='text-white font-bold text-1xl  mx-2'></li>
        <li className='text-white font-bold text-1xl  mx-2'>
        <Link to="/dashboard">DASHBOARD </Link></li>

        <li className='text-white font-bold text-1xl  mx-2'>
        <Link to="/profile">PROFILE</Link></li>




        { 
         user?
         <>

       <li>
       <button onClick={logout} class="btn btn-active btn-ghost text-white font-bold text-1xl  mx-2">SIGNOUT</button>
      </li> 
       

        
  
         </>
         :
         <li className='text-white font-bold text-1xl  mx-2'>
          <Link className='text-white font-bold text-1xl' to="/login">LOGIN</Link></li>
        
         
         
         
         }

     
        
       
 
       
       
        
        
          

   

       
       
    
     





        </>
      
    return (
      <div className=''>
  <div className="navbar bg-primary flex justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-primary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary  w-52">
           
           {menuitems}
  
            
            </ul>
          </div>
          <a className="normal-case text-xl font-bold text-white mx-2">TOUR ITALY</a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuitems}
          </ul>
        </div>
       <div>
     
       </div>

       

      </div>


      </div>
    );
};

export default Navbar;