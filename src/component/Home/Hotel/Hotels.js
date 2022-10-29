import React, { useEffect, useState } from 'react';
import HotelHero from '../Hero/HotelHero';
import Hotel from './Hotel';


const Hotels = () => {
    const [services,setServices]=useState([]);


useEffect(()=>{

fetch('hotel.json')
.then(res=>res.json()).then(data=>setServices(data))


},[])


    return (
        <div className='mt-12'>
           <div className=''>
            

           <h1 className="text-3xl text-center mb-6 text-primary font-bold">TONIGHT <span className="text-black">HOTELS</span></h1>

            <HotelHero></HotelHero>
           
           
           </div>

                    <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {services.map(service=>
                       
                      <Hotel  key={service._id} service={service}></Hotel>
                        )}
                    </div>





        </div>
    );
};

export default Hotels;