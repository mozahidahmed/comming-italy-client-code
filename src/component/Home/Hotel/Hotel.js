import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom';


const Hotel = ({ hotel }) => {
    const { _id,img,name} = hotel;



    return (
        <div>
            <div className="mt-6 lg:max-w-lg  shadow-xl">
                <figure className="w-17"> 
                        <img  src={img} alt="NetWorkError"/>
                </figure>
                <div className="p-3 flex justify-between items-center ">
                   
                   
                    <h1 className="text-1xl  text-primary font-bold">{name}</h1>
                    
                    <div className="flex items-center">
                    <p className='px-2 font-bold'>Booking Now</p>
                    <Link to={`/booking/${_id}`}>
                    <div className="icon-style">
                   <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                    </Link>
                    </div>

                </div>

               
            
            
         
               

            </div>
        </div>
    );
};

export default Hotel;