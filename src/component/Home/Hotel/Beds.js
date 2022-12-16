import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Bed from './Bed';

const Beds = () => {
    const { data: beds, isLoading, refetch } = useQuery('beds', () => fetch('https://comming-italy.onrender.com/hotel', {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
}).then(res => res.json()))

if (isLoading) {
    return <Loading></Loading>

}
    return (
        <div className='mt-2'>
        <div className=''>
         

        <h1 className="text-3xl  mb-1 text-primary font-bold">HOTEL  <span className="text-black">PLACES</span></h1>

        
        
        
        </div>

                 <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                     {beds.slice(0,3).map((bed)=>
                    
                   <Bed  key={beds._id} bed={bed}></Bed>
                     )}
                 </div>





     </div>
    );
};

export default Beds;