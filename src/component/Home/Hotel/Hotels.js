import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import HotelHero from '../Hero/HotelHero';
import Hotel from './Hotel';


const Hotels = () => {
    


const { data: hotels, isLoading, refetch } = useQuery('hotels', () => fetch('https://comming-italy.onrender.com/hotel', {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
}).then(res => res.json()))

if (isLoading) {
    return <Loading></Loading>

}





    return (
        <div className='mt-12'>
           <div className=''>
            

           <h1 className="text-3xl text-center mb-6 text-primary font-bold">TONIGHT <span className="text-black">HOTELS</span></h1>

            <HotelHero></HotelHero>
           
           
           </div>

                    <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {hotels.map((hotel)=>
                       
                      <Hotel  key={hotel._id} hotel={hotel}></Hotel>
                        )}
                    </div>





        </div>
    );
};

export default Hotels;