import React, { useEffect, useState } from 'react';
import PlaceHero from '../Hero/PlaceHero'
import Place from './Place';


const Places = () => {
    const [services,setServices]=useState([]);


useEffect(()=>{

fetch('nature.json')
.then(res=>res.json()).then(data=>setServices(data))


},[])


    return (
        <div className='mt-6'>
           <div className=''>

           <h1 className="text-3xl text-center mb-6 text-primary font-bold">ITALY  <span className="text-black">PLACE</span></h1>
          <PlaceHero></PlaceHero>

           
           
           </div>

                    <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {services.slice(0,6).map(service=>
                       
                      <Place  key={service._id} service={service}></Place>
                        )}
                    </div>





        </div>
    );
};

export default Places;