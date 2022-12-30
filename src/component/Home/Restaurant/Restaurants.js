import React  from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import RestaurantHero from '../Hero/RestaurantHero';
import Restaurant from './Restaurant';


const Restaurants = () => {
    const { data: restaurant, isLoading, refetch } = useQuery('restaurant', () => fetch('https://comming-italy.onrender.com/restaurant', {
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
            

           <h1 className="text-3xl text-center mb-6 text-primary font-bold">BIP <span className="text-black">RESTAURANT</span></h1>
        
        <RestaurantHero></RestaurantHero>
           
           
           </div>

                    <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {restaurant.map(service=>
                       
                      <Restaurant  key={service._id} service={service}></Restaurant>
                        )}
                    </div>





        </div>
    );
};

export default Restaurants;