import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
  
  
    return (
        <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
       
          <Outlet></Outlet>
  
        
        </div> 
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48  text-base-content bg-accent border-solid ">
          
            <li><Link to="/dashboard">Welcome</Link></li>
            <li><Link to="/dashboard/myhotelsitbooking">My booking</Link></li>
           
            
            
        


            
            
            
       
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;